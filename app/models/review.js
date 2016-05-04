var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = require('./user');

var ReviewSchema = new Schema({
  reviewer: [User.schema],
  review: String,
  date: String
});

var Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;