var User = require('../models/user');
var path = require('path');

module.exports = function(app, express) {
  app.get('/', function(req, res) {
    // var testUser = new User({username: 'test', password: 'test'});
    // testUser.save(function(err) {
    //   if (err) {
    //     console.log('routes.js: err in saving testUser!');
    //   }
    // });

    // User.findOne({username: 'test'}).then(function(user) {
    //   res.json(user);
    // });
    res.sendFile(path.join(__dirname, '../../client/index.html'));
  });
};