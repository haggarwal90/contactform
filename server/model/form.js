const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormSchema = new Schema({
  firstname : {
    type : String,
    required : true,
  },
  lastname : {
    type : String,
    required : true,
  },
  email : {
    type : String,
    required : true 
  },
  telephone : {
    type : String,
    required : true 
  },
  address : {
    type : String,
    required : true 
  },
  city : {
    type : String,
    required : true 
  },
  state : {
    type : String,
    required : true 
  },
  zip : {
    type : Number,
    required : true 
  },
  comments : {
    type : String,
    required : true 
  },

});

const FormModel = mongoose.model('forms',FormSchema);

module.exports = FormModel;