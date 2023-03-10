const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const redis = require("redis");
const nodemailer = require("nodemailer");
const fs = require("fs");
const { Amplify, API, graphqlOperation } = require("aws-amplify");
const Handlebars = require("handlebars");
const awsExports = require("./src/aws-exports");
const {
  SERVER_PORT,
  REDIS_USER,
  REDIS_PASS,
  REDIS_URL,
  REDIS_PORT,
} = require("./configs");

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
      "68B9D3D194E4",
      JSON.stringify({
        entrance_type: "outer",
        entrance: true,
        reader_id: "68B9D3D194E4",
        coords: {
          latitude: 2.5645,
          longitude: 2.5645,
        },
        offset: 0,
        turning_parameter_1: 0,
        turning_parameter_2: 0,
        turning_parameter_3: 0,
      })
    );
    await redis_client.set(
      "bleReader",
      JSON.stringify({
        entrance_type: "inner",
        entrance: true,
        reader_id: "bleReader",
        coords: {
          latitude: 2.5645,
          longitude: 2.5645,
        },
        offset: 13.8,
        turning_parameter_1: 0,
        turning_parameter_2: 0,
        turning_parameter_3: 0,
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
    console.log(await redis_client.get("68B9D3D194E4"));
    console.log(await redis_client.get("bleReader"));
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
  if (req.body.length) {
    const scanned_beacons = [];
    for (let x = 0; x < req.body.length; x++) {
      if (!scanned_beacons.includes(req.body[x].blemac_hex_)) {
        const ble_readings = JSON.parse(
          await redis_client.get(req.body[x].blemac_hex_)
        );

        // getting average
        var rssi_dbm_sum = req.body[x].rssi_dbm_;
        var rssi_dbm_ave = 0;
        var number_of_ble = 1;

        //
        // int y = x + 1 prevents 2n(o)
        for (let y = x + 1; y < req.body.length; y++) {
          if (req.body[y].blemac_hex_ === req.body[x].blemac_hex_) {
            rssi_dbm_sum += req.body[y].rssi_dbm_;
            number_of_ble++;
          }
        }
        rssi_dbm_ave = parseFloat((rssi_dbm_sum / number_of_ble).toFixed(2));
        // Data update with average rssi_dbm

        req.body[x].rssi_dbm_ = rssi_dbm_ave;

        const reader_offer = JSON.parse(
          await redis_client.get(req.body[x].devicemac_hex_)
        );
        req.body[x].rssi_dbm_ += reader_offer.offset;
        //

        if (ble_readings === null) {
          await redis_client.set(
            req.body[x].blemac_hex_,
            JSON.stringify([
              {
                reader_id: req.body[x].devicemac_hex_,
                ts: Date.now(),
                strength: -500,
              },
              {
                reader_id: req.body[x].devicemac_hex_,
                ts: Date.now(),
                strength: -2000,
              },
              {
                reader_id: req.body[x].devicemac_hex_,
                ts: Date.now(),
                strength: -1000,
              },
            ])
          );
        }
        // console.log(replace_expired_data(req, ble_readings, x));
        else {

          
          // var oldest = ble_readings[0].ts;
        //   for (let i = 0; i < ble_readings.length; i++) {
        //     if (ble_readings[i].ts < oldest && ble_readings[i].ts < 10000) {
        //       oldest = ble_readings[i].ts;
        //       console.log("here");
        //       ble_readings[i] = {
        //         strength: -1000,
        //         ts: Date.now(),
        //       };
        //     }
        //   }

        //   console.log("escaptwed");
        //   if (ble_readings[0].strength < req.body[x].rssi_dbm_) {
        //     temp_reader_data = ble_readings[0];
        //     ble_readings[0] = {
        //       strength: req.body[x].rssi_dbm_,
        //       reader_id: req.body[x].devicemac_hex_,
        //       ts: Date.now(),
        //     };
        //     temp_reader_data_1 = ble_readings[1];
        //     ble_readings[1] = temp_reader_data;
        //     ble_readings[2] = temp_reader_data_1;
        //   } else if (ble_readings[1].strength < req.body[x].rssi_dbm_) {
        //     temp_reader_data = ble_readings[1];
        //     ble_readings[1] = {
        //       strength: req.body[x].rssi_dbm_,
        //       reader_id: req.body[x].devicemac_hex_,
        //       ts: Date.now(),
        //     };
        //     ble_readings[2] = temp_reader_data;
        //   } else if (ble_readings[2].strength < req.body[x].rssi_dbm_)
        //     ble_readings[2] = {
        //       strength: req.body[x].rssi_dbm_,
        //       reader_id: req.body[x].devicemac_hex_,
        //       ts: Date.now(),
        //     };
        // }

        var best_reader;
        var best_reader1;
        var best_reader2;

        try {
          if (ble_readings.length) {
            if (ble_readings[0].reader_id)
              best_reader = JSON.parse(
                await redis_client.get(ble_readings[0].reader_id)
              );
            if (ble_readings[1].reader_id)
              best_reader1 = JSON.parse(
                await redis_client.get(ble_readings[1].reader_id)
              );
            if (ble_readings[2].reader_id)
              best_reader2 = JSON.parse(
                await redis_client.get(ble_readings[2].reader_id)
              );
            await redis_client.set(
              req.body[x].blemac_hex_,
              JSON.stringify(ble_readings)
            );
          }
        } catch (error) {
          console.log(error);
        }
        console.log();
        console.log(ble_readings);
        console.log("in or out: " + best_reader.entrance_type);
        console.log("reader_id: " + ble_readings[0].reader_id);
        console.log();
      }
    }
  }

  response(200, "Good", "Good", res);
});

//

const shuffle_the_strongest = (req, ble_readings, x) => {
  var temp_reader_data;
  var temp_reader_data_1;
  //

  if (ble_readings[0].strength < req.body[x].rssi_dbm_) {
    temp_reader_data = ble_readings[0];
    ble_readings[0] = {
      strength: req.body[x].rssi_dbm_,
      reader_id: req.body[x].devicemac_hex_,
      ts: Date.now(),
    };
    temp_reader_data_1 = ble_readings[1];
    ble_readings[1] = temp_reader_data;
    ble_readings[2] = temp_reader_data_1;
  } else if (ble_readings[1].strength < req.body[x].rssi_dbm_) {
    temp_reader_data = ble_readings[1];
    ble_readings[1] = {
      strength: req.body[x].rssi_dbm_,
      reader_id: req.body[x].devicemac_hex_,
      ts: Date.now(),
    };
    ble_readings[2] = temp_reader_data;
  } else if (ble_readings[2].strength < req.body[x].rssi_dbm_)
    ble_readings[2] = {
      strength: req.body[x].rssi_dbm_,
      reader_id: req.body[x].devicemac_hex_,
      ts: Date.now(),
    };
  console.log();
  console.log(" sorting");
  console.log(ble_readings);
  return ble_readings;
};

const replace_expired_data = (req, ble_readings, x) => {
  console.log(ble_readings.length);
  for (let i = 0; ble_readings.length; i++) {
    if (ble_readings[x].ts < Date.now() - 3000) {
      ble_readings[x] = {
        strength: -1000,
        ts: Date.now(),
      };

      console.log("here");
    }
  }
  console.log("ble_readings");
  return ble_readings;
};

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
