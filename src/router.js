"use strict";

const express = require("express");
const router = express.Router();
const indexController = require("./controllers/indexController");
const aboutController = require("./controllers/aboutController");
const projectController = require("./controllers/projectController");

router.get("/", indexController.renderHomePage);
router.get("/about", aboutController.renderAbout);
router.get("/projects", projectController.renderProjects);

module.exports = router;
