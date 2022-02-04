"use strict";

const express = require("express");
const router = require("./router");
const helmet = require("helmet");
const fs = require("fs");
const https = require("https");
const app = express();

const httpsOptions = {
  key: fs.readFileSync("./src/ssl/key.pem"),
  cert: fs.readFileSync("./src/ssl/cert.pem"),
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(helmet());

app.use("/", router);

let httpsServer = https.createServer(httpsOptions, app);

httpsServer.listen(8443, () => {
  console.log("HTTPS listening on port: 8443");
});
