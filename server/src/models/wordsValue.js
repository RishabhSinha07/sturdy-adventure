const mongoose = require('mongoose');

const { Schema } = mongoose;

const wordValueSchema = new Schema({
  id: { type: Number, required: true },
  value: { type: String, required: true },
});

const wordValues = mongoose.model('wordValues', wordValueSchema);

module.exports = wordValues;
