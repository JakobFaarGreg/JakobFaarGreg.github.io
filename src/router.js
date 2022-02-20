"use strict";

const express = require("express");
const indexController = require("./controllers/indexController");
const aboutController = require("./controllers/aboutController");
const router = express.Router();

router.get("/", indexController.renderHomePage);
router.get("/about", aboutController.renderAbout);

module.exports = router;
