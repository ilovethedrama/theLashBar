var express = require('express');
var router = express.Router();
var Customer = require('../models/customer');
var midObj = require('../middleware');

app.get("/", function (req, res) {
  res.render("main");
});

app.get("/appointment", function (req, res) {
  res.render("appointment");
});

app.get("/appointmentConfirmation", function (req, res) {
  res.render("appConfirmation");
});

app.post('/appointment', function (req, res) {
  // get data from form and add to customer array
  const name = {
    fstName = req.body.fName,
    lstName = req.body.fName
  };
  const email = req.body.email;
  const visit = {
    treatment = req.body.treatment,
    allergies = req.body.fName,
    time = req.body.time,
    date = req.body.date,
  }
});

const newPersonDeets = {
  name: name,
  email: email,
  visit: visit
}
// Create a new person and save to DB
Customer.create(newPersonDeets, function (err, newlyCreated) {
  if (err) {
    console.log(err);
  } else {
    console.log(newlyCreated);
    console.log('a new person entry was added to the DB');
    res.redirect("/appointmentConfirmation");
  }
});


module.exports = router;