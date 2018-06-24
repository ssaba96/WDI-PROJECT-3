const mongoose = require('mongoose');

const museumSchema = new mongoose.Schema({
  image: { type: String, required: true },
  address: { type: String, required: true },
  name: { type: String, required: true }

});




module.exports = mongoose.model('Museum', museumSchema);
