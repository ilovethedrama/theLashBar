const port = process.env.port || 3000,
    bodyparser = require('body-parser'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express();

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({
    extended: true
}));
//this is a way of using, requiring and running at the same time. 
//It needs 3 options, the secret can be literally anything, it is used to code and decode web sessions
app.use(require('express-session')({
    secret: 'Mama Mia Thats a Spicy Meatball!',
    resave: false,
    saveUninitialized: false
}));

app.use(express.static(__dirname + '/styles/'));
app.use(express.static(__dirname + '/Media/'));
app.use(express.static(__dirname + '/JS/'));

mongoose.connect('mongodb://localhost/lashbar', {
    useNewUrlParser: true
});
const mongCon = mongoose.connection;
mongCon.on('connected', function () {
    console.log('beep boop \ndatabase mainframe syncroniiiiiiized');
});

mongCon.on('disconnected', function () {
    console.log('you\'re off the database now');
});

// mongCon.on('error', function () {
//     console.log(error, 'ohhh shit we got incoming, \n there\'s an error!!');
// });


app.get("/", function (req, res) {
    res.render("main");
});

app.get("/appointment", function (req, res) {
    res.render("appointment");
});

app.get("/appointmentConfirmation", function (req, res) {
    res.render("appConfirmation");
});

app.listen(port, function () {
    console.log('You rockin now on port ' + port);
});

var http = require('http');
var servz = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Sup bitches?');
});


var customerSchema = new mongoose.Schema({
    name: {
        firstName: String,
        middleName: String,
        lastName: String
    },
    mobile: String,
    email: String,
    visit: {
        treatment: String,
        allergies: String,
        time: Number,
        date: Date,
        howManyTimes: Number
    }
});

var Customer = mongoose.model('Customer', customerSchema);
// this makes a model based on the customer schema with methods on it so that you can do Customer.find etc

app.post('/appointment', function (req, res) {
    console.log('data was sent i think!');
    res.redirect('/');
});

// Customer.create({
//     name: {
//         firstName: 'Marcia',
//         lastName: 'Henriques',
//     },
//     mobile: '07947733333',
//     email: 'cheerios@cheeryGood.com'
// }, function (err, personFile) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(personFile);
//         console.log('newly created file for a customer');
//     }
// });

servz.listen(3001, '127.0.0.1');