const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  title: {
    type: String,

  },
  path: {
    type: String,

  },
  date: {
    type: Date,
    default: Date.now
  },
  imgPath: {
    type: String,
    default: null
  },
  content: {
    type: String,
    default: null
  },
  headline: {
    type: Boolean,
    default: false
  },
  
});

module.exports = Item = mongoose.model('item', ItemSchema);
