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

UserSchema.pre('save', function(next) {
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      throw err;
    }
    // hash the password along with our new salt
    bcrypt.hash(this.password, salt, null, function (err, hash) {
      if (err) {
        throw err;
      }
      this.password = hash;
      next();
    });
  });
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
