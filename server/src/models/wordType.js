const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordTypeSchema = new Schema({
  name: {type:String, required:true },
  id: {type:Number, required:true },
});

const wordType = mongoose.model('wordType', wordTypeSchema);

module.exports = wordType