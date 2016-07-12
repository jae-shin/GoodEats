var User = require('../models/user');
var Place = require('../models/place');
var path = require('path');

module.exports = function(app, express) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
  });

  app.get('/places', function(req, res) {
    Place.find().then(function(places) {
      console.log('places: ', places);
      res.send(places);
    });
  });

  app.post('/create', function(req, res) {
    var place = req.body;
    Place.create({name: place.name, time: place.time, menus: place.menus})
      .then(place => res.status(201).end())
      .catch(error => res.status(500).send({error: error.message}));
  });
};



// var testUser = new User({username: 'test', password: 'test'});
// testUser.save(function(err) {
//   if (err) {
//     console.log('routes.js: err in saving testUser!');
//   }
// });

// User.findOne({username: 'test'}).then(function(user) {
//   res.json(user);
// });