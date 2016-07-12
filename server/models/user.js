var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var UserSchema = mongoose.Schema({
  username: {
    type: String, 
    unique: true, 
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.methods.comparePasswords = function(inputPassword) {
  return new Promise(function(resolve, reject) {
    bcrypt.compare(inputPassword, this.password, function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

var genSaltAsync = Promise.promisify(bcrypt.genSalt);
var hashAsync = Promise.promisify(bcrypt.hash);

UserSchema.pre('save', function(next) {
  genSaltAsync
    .then(function(salt) {
      return hashAsync(this.password, salt, null).then(function(hashed) {
        this.password = hashed;
      });
    })
    .catch(function(err) {
      console.log('error in hashing password');
    });
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
