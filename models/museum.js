const mongoose = require('mongoose');

const museumSchema = new mongoose.Schema({
  image: { type: String, required: true },
  location: {
    lat: { type: Number },
    lng: { type: Number }
  },
  name: { type: String, required: true }

});



module.exports = mongoose.model('Museum', museumSchema);
