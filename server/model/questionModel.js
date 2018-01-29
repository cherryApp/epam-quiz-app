const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  name: {type: String},
  title: {type: String},
  content: {type: String},
  description: {type: String},
  answers: [Object]
});

module.exports = mongoose.model("question", questionSchema);
