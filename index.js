const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const fs = require("fs");
const { SERVER_PORT } = require("./configs");

const app = express();

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("Making request with url " + req.url);
  next();
});

// app.get("/%PUBLIC_URL%/favicon.ico", (req, res) =>
//   res.sendFile(__dirname + "/favicon.ico")
// );

//website
app.get("/", (req, res) =>
  res.sendFile(__dirname + "../personal/build/index.html")
);

const response = (code, status, message) =>
  res.status(code).json({
    status,
    message,
  });

app.listen(SERVER_PORT, () => console.log("server online"));
