const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name : {type: String , required: true} , 
  form: { type: String, required: true },
  content: {type: Array, required: true}
 
});

module.exports = mongoose.model('Forms', formSchema);