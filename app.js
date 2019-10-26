const port = process.env.PORT || 3000,
  cookieParser = require('cookie-parser'),
  bodyparser = require("body-parser"),
  mongoose = require("mongoose"),
  express = require("express"),
  Nexmo = require('nexmo'),
  app = express();

// this tells the server to load anything thats in an env file into an environment variable
require('dotenv').config();

app.set("view engine", "ejs");
// Initialize the Nexmo deets in env var
const nexmoAPI_KEY = process.env.API_KEY;
const nexmoAPI_SECRET = process.env.API_SECRET;
const mongolab_PW = process.env.MONGOLAB_LINK;
const adzNUM = process.env.ADES_NUM;



app.use(
  bodyparser.urlencoded({
    extended: true
  })
);

/*this is a way of using, requiring and running at the same time.
It needs 3 options, the secret can be literally anything, it is used to code and decode web sessions
The saveUninitialized if set to true will mean that even if server goes down, 
when it comes back customers will still be logged into their accounts as the login status is stored on a permanent db for persistant login ux
resave when true means that if no details have changed on the login side, the details will be save again anyway - can be bad performance wise sometimes*/
app.use(
  require("express-session")({
    secret: "Mama Mia Thats a Spicy Meatball!",
    resave: false,
    saveUninitialized: false
  })
);

app.use(express.static(__dirname + "/styles/CSS/"));
app.use(express.static(__dirname + "/Media/"));
app.use(express.static(__dirname + "/JS/"));
app.use(express.static('public'));
app.use(cookieParser());

const nexmo = new Nexmo({
  apiKey: nexmoAPI_KEY,
  apiSecret: nexmoAPI_SECRET,
}, {
  debug: true
});


/*mongoose.connect("mongodb://localhost/lashB", {
  useNewUrlParser: true
});*/

// this links the db with eith mongolab or the local version of the db
mongoose.connect(mongolab_PW || 'mongodb://localhost/lashB', {
  useNewUrlParser: true
});

/* format for mongolab
mongodb://<dbuser>:<dbpassword>@ds039231.mlab.com:39231/lashbar */


const mongCon = mongoose.connection;

mongCon.on("connected", function () {
  console.log(`beep boop 
    database mainframe syncroniiiiiiized`);
});

mongCon.on("disconnected", function () {
  console.log(`You're off the database now...Daniel San.`);
});

mongCon.on("error", function () {
  console.log(`We've got company...there's an error!!!`, Error);
});

app.get("/", function (req, res) {
  res.cookie('theLashCookie', 'solo', {
    maxAge: 900000
  })
  res.render("main");
});

app.get("/appointment", function (req, res) {
  res.render("appointment");
});

app.get("/appointmentConfirmation", function (req, res) {
  res.render("appConfirmation");
});



app.get("/blogHome", function (req, res) {
  res.render("blogHome");
});





const from = 'The Lashbar';
const to = adzNUM;
const text = `Thanks for placing your booking, we'll be in touch to confirm shortly. Stay classy bitch -LashBar`;
const options = {
  "type": "unicode"
}


var customerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobile: Number,
  email: String,
  treatment: String,
  time: String,
  date: Date
});

var Customer = mongoose.model("Customer", customerSchema, "Customer");
/* this makes a model based on the customer schema with methods on it so that you can do Customer.find etc
 and expressly names it customer as mongo will by default change the collection name to Customers */


app.post('/appointment', function (req, res) {
  var firstName = req.body.firstName,
    lastName = req.body.lastName,
    mobile = req.body.mobile,
    email = req.body.email,
    treatment = req.body.treatment,
    time = req.body.time,
    date = req.body.date;
  var deetz = {
    date: date,
    time: time,
    treatment: treatment,
    email: email,
    mobile: mobile,
    firstName: firstName,
    lastName: lastName
  }
  Customer.create(deetz, function (err, info) {
    if (err) {
      console.log(err, `something went wrong`);
    } else {
      console.log(`info returned was:`, info, `and the deetz were:`, deetz);
      console.log('newly created file for a customer');
    }
  });



  // this is the unicode equivalent of the 100 emoji
  // const hunna = 'U+1F4AF'
  // nexmo.message.sendSms(from, to, `LATIFAH NAILS : Thanks ${firstName} we'll be in touch shortly to confirm your ${treatment} treatment. x`);

  res.render('appConfirmation', {
      firstName: firstName
      /*the first 'firstName' this refers to what it'll be called in appConfirmation, 
      and the second is what its called within the post route*/
    }

  );
});

app.listen(port, function () {
  console.log(`You rockin now on port ${port}`);
});