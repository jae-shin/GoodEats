// Express server set up
var express = require('express');

// Mongoose db connection
var db = require('./config/db');

// Express middleware
var bodyParser = require('body-parser');
var morgan = require('morgan');
var session = require('express-session');

// set port to 8080
var port = 8080;
var app = express();


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));
app.use(session({
  secret: 'good eats is a secret',
  resave: false,
  saveUninitialized: true
}));

// configure our server with routes
require('./config/routes.js')(app, express);

// start listening to requests on port
app.listen(port);

console.log('Server running on port ' + port);

module.exports = app;