var express = require("express");
var router = express.Router();
var passport = require("passport");
var Customer = require("../models/customer");

//==============
//AUTH ROUTES
//==============

//RESTFUL ROUTES - ALL ROUTES START ERE (Root Route)
router.get("/", function(req, res) {
  res.render("home");
});

//this will SHOW the register form
router.get("/register", function(req, res) {
  res.render("register");
});

//handles SIGN UP logic
router.post("/register", function(req, res) {
  var newSignUp = new User({ username: req.body.username });
  User.register(newSignUp, req.body.password, function(err, nuUser) {
    if (err) {
      console.log(err);
      req.flash("error", err.message);
      console.log(err);
      //passport has a few premade error messages including
      //here a message saying something regarding signing up,
      //ie password can't be blank, username taken etc
      return res.render("register");
    }
    passport.authenticate("local")(req, res, function() {
      req.flash("successLog", "Welcome to the squadron " + nuUser.username);
      res.redirect("/campgrounds");
    });
  });
});

//shows login form
router.get("/login", function(req, res) {
  res.render("login", { message: req.flash("error") });
  //===========
  // res.render('login', {message: req.flash('error')});
  //this links the 'uh oh spaghettios' message in the login middleware,
  //passing through message as an alias that is then used in the login ejs file
  //only displaying IF user fails to login
  //and is redirected to login as seen in the middleware file
  //===========
});

//deals with login LOGIC
router.post(
  "/login",
  passport.authenticate(
    "local",
    //when a req. to login page comes it runs the middleware pp.auth method, it uses the inbuilt
    //'local' method and authenticates against what is stored in the db
    //if user logs in it goes campgrounds, if fails back to login
    {
      successRedirect: "/campgrounds",
      failureRedirect: "/login"
    }
  ),
  function(err, body) {
    if (err) {
      console.log("you done fucked up");
    } else {
      console.log("its alright son");
    }
  }
);

//logout route
router.get("/logout", function(req, res) {
  req.logout();
  req.flash("successLog", "logged out, later patater");
  res.redirect("/campgrounds");
});

//middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
