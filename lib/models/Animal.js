const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    requied: true
  },
  diet: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
}, {
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
    }
  }
});

module.exports = mongoose.model('Animal', animalSchema);
