var mongoose = require('mongoose');
var Promise = require('bluebird');

mongoose.Promise = Promise;
mongoose.connect('mongodb://127.0.0.1:27017');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function() {
  console.log('MongoDB connection is now open!');
});

module.exports = db;
