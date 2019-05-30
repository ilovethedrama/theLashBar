var express = require('express');
var router = express.Router();
var Customer = require('../models/customer');
var midObj = require('../middleware');

app.get("/", function(req, res) {
  res.render("main");
});

app.get("/appointment", function(req, res) {
  res.render("appointment");
});


module.exports = router;