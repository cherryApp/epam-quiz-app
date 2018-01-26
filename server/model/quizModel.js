const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  name: {type: String},
  title: {type: String},
  description: {type: String},
  active: {type: Boolean, default: false},
  questions: {type: [mongoose.SchemaTypes.ObjectId], default: []}
});

module.exports = mongoose.model("quiz", quizSchema);
