var express = require("express");
var router = express.Router();

require("../models/connection");
const tweet = require("../models/tweet");
const { checkBody } = require("../modules/checkBody");

router.post("/");

module.exports = router;
