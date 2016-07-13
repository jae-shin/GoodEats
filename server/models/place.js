var mongoose = require('mongoose');

var PlaceSchema = mongoose.Schema({
  name: {type: String, unique: true},
  time: Number,
  menus: String
});

var Place = mongoose.model('Place', PlaceSchema);

var initializePlaces = [
  {
    name: 'Buckhorn Grill',
    time: '2',
    menus: 'chicken avocado salad'
  },
  {
    name: 'Bio Cafe',
    time: '8',
    menus: 'salmon sandwich'
  },
  {
    name: 'Freshroll-Vietnamese Rolls & Bowls',
    time: '9',
    menus: '3 freshrolls combo'
  }
];

Place.collection.insert(initializePlaces, function(err, places) {
  if (err) {
    console.log('Error in adding initialize places: ', err);
  } else {
    console.log('Places table initialization successful!');
  }
});

module.exports = Place;
