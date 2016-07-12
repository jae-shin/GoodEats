var User = require('../models/user');
var Place = require('../models/place');
var path = require('path');

module.exports = function(app, express) {

  app.get('/placesList', function(req, res) {
    Place.find().then(function(places) {
      res.send(places);
    });
  });

  app.post('/createNewPlace', function(req, res) {
    var place = req.body;
    Place.create({name: place.name, time: place.time, menus: place.menus})
      .then(place => res.status(201).end())
      .catch(error => res.status(500).send({error: error.message}));
  });

  app.post('/signupNewUser', function(req, res) {
    var user = req.body;
    User.findOne({username: user.username})
      .then(function(result) {
        if (result) {
          res.status(500).send({error: 'user already exists!'});
        } else {
          User.create({username: user.username, password: user.password})
            .then(function(user) {
              res.status(200).end();
            });
        }
      });
  });

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
  });
};

