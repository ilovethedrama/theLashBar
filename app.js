var express = require('express');
var bodyparser = require('body-parser');

var app = express();
var port = process.env.port || 3000;

app.set('view engine', 'ejs');

// app.use(express.static(__dirname + '/styles/'));
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

console.log(__dirname + '/Media/');
console.log(__dirname + '/styles/');

app.use(express.static(__dirname + '/styles/'));
app.use(express.static(__dirname + '/Media/'));
app.use(express.static(__dirname + '/JS/'));

app.get('/', function (req, res) {
    res.render('main');
});

app.get('/appointment', function (req, res) {
    res.render('appointment');
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

servz.listen(3001, '127.0.0.1');