var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var userSchema = new mongoose.Schema({
  name: String,
  Password: String,
  age:Number
});



var userModel = mongoose.model('User', userSchema);
