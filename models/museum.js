const mongoose = require('mongoose');

const museumSchema = new mongoose.Schema({
  images: [{ type: String, required: true }],
  location: {
    lat: { type: Number },
    lng: { type: Number }
  },
  name: { type: String, required: true },
  category: { type: String, required: true },
  address: { type: String, required: true },
  postcode: {type: String, required: true}

});



module.exports = mongoose.model('Museum', museumSchema);
