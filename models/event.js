const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  Rank:Number,
  Name:String,
  Platform:String,
  Year:String,
  Genre:String,
  Publisher:String,
  Global_Sales:Number
})

module.exports = mongoose.model('Event', eventSchema);