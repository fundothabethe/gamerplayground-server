const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const redis = require("redis");
const nodemailer = require("nodemailer");
const fs = require("fs");
const {
  SERVER_PORT,
  REDIS_USER,
  REDIS_PASS,
  REDIS_URL,
  REDIS_PORT,
} = require("./configs");
const Handlebars = require("handlebars");

const app = express();

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

const redis_client = redis.createClient({
  url: `redis://${REDIS_USER}:${REDIS_PASS}@${REDIS_URL}:${REDIS_PORT}`,
  legacyMode: false,
});

(async () => {
  redis_client.on("error", (error) => console.error(`Error : ${error}`));
  await redis_client
    .connect()
    .then(() => console.log("redis connected"))
    .catch((err) => console.log(err))
    .finally(() => console.log("done redis operations"));
})();

app.get("/%PUBLIC_URL%/favicon.ico", (req, res) =>
  res.sendFile(__dirname + "/favicon.ico")
);

app.use((req, res, next) => {
  console.log("Making a " + req.method + " request with url " + req.url);
  next();
});

//website
// app.get("/", (req, res) => response(200, "success", "home page here"));

app.post("/", async (req, res) => {
  // Organize data comming from the mobile device
  if (req.body.length === 1 && req.body[0].data) req.body = req.body[0].data;

  // Original Data
  // console.log(req.body);
  // Cleaning data

  if (req.body.length)
    for (let x = 0; x < req.body.length; x++) {
      const keys = Object.keys(req.body[x]);
      const values = Object.values(req.body[x]);
      for (let y = 0; y < keys.length; y++) {
        var key = keys[y].replace("(", "_").replace(")", "_");
        delete req.body[x][keys[y]];
        const temp_key = req.body[x];
        req.body[x] = { ...temp_key, [key.toLowerCase()]: values[y] };
      }
    }
  // Cleaned data
  // console.log(req.body);
  // getting prev data from redis database
  // keep scanned data to save o(n) complexity
  var scanned_beacons = new Array();
  //  Get all the read data from requwt body
  for (let x = 0; x < req.body.length; x++) {
    // Get previously saved data from redis
    var prev_data = await redis_client.get(req.body[x].devicemac_hex_);

    // Check if current beacon average is already calculated
    if (!scanned_beacons.includes(req.body[x].devicemac_hex_)) {
      // Calculations
      // Save to scanned_beacons to avoid n(n) time complexity
      scanned_beacons.push(req.body[x].devicemac_hex_);
      // Getting average rssi_dbm
      // Scanning to get average rssi_dbm
      for (let y = 0; y < req.body.length; y++) {
        if (req.body[y].devicemac_hex_ === req.body[x].devicemac_hex_) {
          console.log("Average_rssi_dbm from req: ", req.body[x].rssi_dbm_);
          // This doesnt get the average
          req.body[x].rssi_dbm_ =
            (req.body[x].rssi_dbm_ + req.body[y].rssi_dbm_) / 2;
        }
      }

      console.log("Average_rssi_dbm: ", req.body[x].rssi_dbm_);
    }

    // Data update with average rssi_dbm
    await redis_client.set(req.body[x].devicemac_hex_, req.body[x].rssi_dbm_);

    // console.log(req.body);

    // Update data
  }

  /*
  
  Data to be stored/Updated. Structure

  redis database
  
  {
    "key": "value",
    ...
  }

  {
    "bracon_mac_address": "strength"
  }
  
  Dynamodb database
  
  Original Structure
  
  type Store {
    id: ID!
    name: String!
    readers(filter: ModelReadersFilterInput, sortDirection: ModelSortDirection, limit: Int, nextToken: String): ModelReadersConnection
    createdAt: AWSDateTime!
    updatedAt: AWSDateTime!
  }
  
  type Readers {
    id: ID!
    status: String!
    position: String!
    entrance_type: String
    store_id: ID!
    location(filter: ModelLocationFilterInput, sortDirection: ModelSortDirection, limit: Int, nextToken: String): ModelLocationConnection
    beacons(filter: ModelBeaconFilterInput, sortDirection: ModelSortDirection, limit: Int, nextToken: String): ModelBeaconConnection
    createdAt: AWSDateTime!
    updatedAt: AWSDateTime!
  }

  type Beacon {
    id: ID!
    mac: String!
    status: String!
    signal_strength: Int!
    reader_id: ID!
    createdAt: AWSDateTime!
    updatedAt: AWSDateTime!
  }

  type Location {
    id: ID!
    latitude: Float!
    longitude: Float!
    reader_id: ID!
    createdAt: AWSDateTime!
    updatedAt: AWSDateTime!
  }

  Updating   */
  //
  response(200, "success", "data recieved", res);
});

//Sending messsage

// send_mail(
//   "fundondoh@gmail.com",
//   "trvpbevt@gmail.com",
//   "Alert",
//   "Someone stealing message"
// )
//   .then(() => console.log("sent"))
//   .catch((err) => response(400, "failed", err, res))
//   .finally(() => response(200, "Good", "Sent", res))

const send_mail = async (from, to, subject, message) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "fundondoh@gmail.com", // generated ethereal user
      pass: "wwpulhijfpuokuxo", // generated ethereal password
    },
  });

  const template = Handlebars.compile(
    fs.readFileSync("./mails/report/index.html", "utf-8")
  );

  // send mail with defined transport object
  await transporter.sendMail({
    from: `"Smartee 👻" <${from}>`, // sender address
    to, // list of receivers
    subject, // Subject line
    html: template({ message, other_message: "fundo" }), // plain text body
    // html: template(JSON.stringify({ message, other_message })), // plain text body
  });
};

const response = (code, status, message, res) =>
  res.status(code).json({
    status,
    message,
  });

app.listen(SERVER_PORT, () => console.log("server online"));
