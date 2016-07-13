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
  var user = this;
  return new Promise(function(resolve, reject) {
    bcrypt.compare(inputPassword, user.password, function(err, result) {

      console.log('user database password: ', user.password);
      console.log('input password: ', inputPassword);
      console.log('inside compare bcrypt password');
      if (err) {
        console.log('err');
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

UserSchema.pre('save', function(next) {
  var user = this;
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      throw err;
    }
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        throw err;
      }
      user.password = hash;
      next();
    });
  });
});

var User = mongoose.model('User', UserSchema);

// User.remove({ username: 'jae' }, function (err) {
//   if (err) {
//     console.log('error in removing user');
//   }
// });


module.exports = User;
