const express = require("express");
const Router = express.Router();
const { urlShortner } = require("../controller/controllers");
Router.post("/", urlShortner);
