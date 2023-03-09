const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const redis = require("redis");
const nodemailer = require("nodemailer");
const fs = require("fs");
const { Amplify, API, graphqlOperation } = require("aws-amplify");
const awsExports = require("./src/aws-exports");
const {
  SERVER_PORT,
  REDIS_USER,
  REDIS_PASS,
  REDIS_URL,
  REDIS_PORT,
} = require("./configs");
const Handlebars = require("handlebars");
const { updateStore } = require("./src/graphql/mutations");
const { stringify } = require("querystring");

const app = express();
Amplify.configure(awsExports);

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

app.get("/favicon.ico", (req, res) => res.sendFile(__dirname + "/favicon.ico"));

app.use((req, res, next) => {
  console.log("Making a " + req.method + " request with url " + req.url);
  next();
});

app.get("/", async (req, res) => {
  try {
    await redis_client
      .get("68B9D3D194E4")
      .then((data) => console.log(data))
      .catch((_) => console.log(_));
  } catch (error) {
    console.log(error);
  } finally {
    response(200, "g", "G", res);
  }
});

app.get("/set-up", async (req, res) => {
  try {
    await redis_client.set(
      "outer_entrance",
      JSON.stringify({
        entrance_type: "outer",
        entrance: true,
        reader_id: "68B9D3D194E4",
      })
    );
    await redis_client.set(
      "inner_entrance",
      JSON.stringify({
        entrance_type: "inner",
        entrance: true,
        reader_id: "bleReader",
      })
    );
  } catch (error) {
    console.log(error);
  } finally {
    response(200, "g", "set up complete", res);
  }
});

app.get("/get-set-up", async (req, res) => {
  try {
    console.log(await redis_client.get("outer_entrance"));
    console.log(await redis_client.get("inner_entrance"));
  } catch (error) {
    console.log(error);
  } finally {
    response(200, "g", "Done operation", res);
  }
});

app.post("/", async (req, res) => {
  // Organize data comming from the mobile device

  if (req.body.data) {
    req.body = req.body.data;
    req.body = req.body.replaceAll("=", ':"');
    req.body = req.body.replaceAll(",", '",');
    req.body = req.body.replaceAll("'", '"');
    req.body = req.body.replaceAll('}"', '"}');
    req.body = req.body.replaceAll("}]", '"}]');
    req.body = JSON.parse(req.body);
  }

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

  if (req.body.length)
    for (let x = 0; x < req.body.length; x++) {
      req.body[x].rssi_dbm_ = parseInt(req.body[x].rssi_dbm_);
    }

  // Cleaned data

  var inner_entrance;
  var outer_entrance;
  var inner_reader_data;
  var outer_reader_data;
  var reader_prev_data;
  var new_reader_data = new Object();
  const inner_reader_offset = 13.8;

  //

  for (let i = 0; i < req.body.length; i++)
    req.body[i].blemac_hex_ = req.body[i].blemac_hex_.replaceAll(":", "");

  var new_body = new Array();
  if (req.body.length)
    for (let x = 0; x < req.body.length; x++) {
      if (req.body[x].blemac_hex_ === "F366A246B44B")
        new_body = [...new_body, req.body[x]];
    }
  req.body = new_body;

  try {
    inner_entrance = JSON.parse(await redis_client.get("inner_entrance"));
    outer_entrance = JSON.parse(await redis_client.get("outer_entrance"));
    if (req.body.length)
      reader_prev_data = JSON.parse(
        await redis_client.get(req.body[0].devicemac_hex_)
      );
  } catch (error) {
    console.log(error);
  }

  if (!req.body.length) return response(200, "fail", "No data provided", res);
  // Get previuos data stored on redis
  // console.log(req.body);
  // getting prev data from redis database
  // keep scanned data to save o(n) complexity
  var scanned_beacons = new Array();
  //  Get all the read data from requwt bodyget

  for (let x = 0; x < req.body.length; x++) {
    // Get previously saved data from redis
    // var prev_data = await redis_client.get(req.body[x].blemac_hex_);
    // Check if current beacon average is already calculated
    if (!scanned_beacons.includes(req.body[x].blemac_hex_)) {
      // Calculations
      // Save to scanned_beacons to avoid n(n) time complexity
      scanned_beacons.push(req.body[x].blemac_hex_);
      // Getting average rssi_dbm
      // Scanning to get average rssi_dbm
      // Collecting rssi_dbm for the same beacon
      var rssi_dbm_sum = req.body[x].rssi_dbm_;
      var rssi_dbm_ave = 0;
      var number_of_ble = 1;

      // int y = x + 1 prevents 2n(o)
      for (let y = x + 1; y < req.body.length; y++) {
        if (req.body[y].blemac_hex_ === req.body[x].blemac_hex_) {
          rssi_dbm_sum += req.body[y].rssi_dbm_;
          number_of_ble++;
        }
      }
      if (number_of_ble > 1)
        rssi_dbm_ave = parseFloat((rssi_dbm_sum / number_of_ble).toFixed(2));
      // Data update with average rssi_dbm

      req.body[x].rssi_dbm_ = rssi_dbm_ave;
      // Get entrance reader data to compare with current ble

      // Do calculations for in-store out-store trollies
      // Get inner entrance data

      new_reader_data = {
        ...new_reader_data,
        [req.body[x].blemac_hex_]: {
          strength: req.body[x].rssi_dbm_,
          status: req.body[x].rssi_dbm_ < 100 ? "active" : "inactive",
        },
      };

      if (inner_entrance && outer_entrance) {
        // Save the it as inner or

        try {
          outer_reader_data = JSON.parse(
            await redis_client.get(outer_entrance.reader_id)
          );
          inner_reader_data = JSON.parse(
            await redis_client.get(inner_entrance.reader_id)
          );
        } catch (error) {
          console.log(error);
        }

        console.log("calculating in_store value");
        if (
          inner_reader_data &&
          outer_reader_data &&
          inner_reader_data[req.body[x].blemac_hex_] &&
          outer_entrance.reader_id === req.body[0].devicemac_hex_
        ) {
          // Set data for the data to be saved
          // Reader is an outside reader
          console.log("outer Reader " + req.body[x].rssi_dbm_);

          console.log(
            "in-store: " +
              !!(
                inner_reader_data[req.body[x].blemac_hex_].strength >
                req.body[x].rssi_dbm_
              )
          );
          console.log(
            "outer Reader " +
              inner_reader_data[req.body[x].blemac_hex_].strength
          );

          new_reader_data[req.body[x].blemac_hex_] = {
            ...new_reader_data[req.body[x].blemac_hex_],
            in_store: !!(
              inner_reader_data[req.body[0].blemac_hex_].strength >
              req.body[x].rssi_dbm_
            ),
          };
        } else if (
          outer_reader_data &&
          inner_reader_data &&
          outer_reader_data[req.body[x].blemac_hex_] &&
          inner_entrance.reader_id === req.body[0].devicemac_hex_
        ) {
          console.log("original stength " + req.body[x].rssi_dbm_);
          req.body[x].rssi_dbm_ = req.body[x].rssi_dbm_ + inner_reader_offset;
          console.log("added stength " + req.body[x].rssi_dbm_);
          console.log("Inner Reader " + req.body[x].rssi_dbm_);
          console.log(
            "outer Reader " +
              outer_reader_data[req.body[x].blemac_hex_].strength
          );

          console.log(
            "in-store: " +
              !!(
                outer_reader_data[req.body[x].blemac_hex_].strength <
                req.body[x].rssi_dbm_
              )
          );
          new_reader_data[req.body[x].blemac_hex_] = {
            ...new_reader_data[req.body[x].blemac_hex_],
            strength: req.body[x].rssi_dbm_,
            in_store: !!(
              outer_reader_data[req.body[x].blemac_hex_].strength <
              req.body[x].rssi_dbm_
            ),
          };
        } else if (!outer_reader_data) console.log("Outer reader no data");
        else if (!inner_reader_data) console.log("Inner reader no data");
        else if (
          outer_entrance.reader_id !== req.body[0].devicemac_hex_ &&
          inner_entrance.reader_id !== req.body[0].devicemac_hex_
        )
          console.log("Reader is not an entrance type");
        else console.log("last");
      } else
        console.log(
          "Set up the inner and outer entrance data  || run a GET request with '/set-up'"
        ); // No entrance data
    }
  }
  console.log("New Reader data to be saved by: " + req.body[0].devicemac_hex_);
  await redis_client
    .set(req.body[0].devicemac_hex_, JSON.stringify(new_reader_data))
    .then(() => console.log("Data saved"))
    .catch((err) => console.log(err))
    .finally(() => response(200, "success", "data recieved", res));
  // response(200, "success", "data recieved", res);
  console.log();
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
