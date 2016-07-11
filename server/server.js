// Express server set up
var express = require('express');

// Express middleware
var bodyParser = require('body-parser');
var morgan = require('morgan');

// set port to 8000
var port = 8080;
var app = express();

// app.set('views', __dirname + '/views');
// app.set('view engine', 'html');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '../client'));

// configure our server with routes
require('./config/routes.js')(app, express);

// start listening to requests on port
app.listen(port);

console.log('Server running on port ' + port);

module.exports = app;