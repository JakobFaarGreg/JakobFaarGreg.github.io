"use strict";

const express = require("express");
const path = require("path");
const router = require("./router.js");
const logger = require("./logger");
const helmet = require("helmet");
const handlebars = require('express-handlebars');
const fs = require("fs");
const https = require("https");
const app = express();

const httpsOptions = {
  key: fs.readFileSync("./src/ssl/key.pem"),
  cert: fs.readFileSync("./src/ssl/cert.pem"),
};

app.use(logger);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use("/", router);

let httpsServer = https.createServer(httpsOptions, app);

httpsServer.listen(8443, () => {
  console.log("HTTPS listening on port: 8443");
});
