const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  rating: { type: Number, min: 1, max: 5, required: true }
});

const museumSchema = new mongoose.Schema({
  image: { type: String, required: true },
  location: {
    lat: { type: Number },
    lng: { type: Number }
  },
  name: { type: String, required: true },
  category: { type: String, required: true },
  address: { type: String, required: true },
  postcode: {type: String, required: true},
  reviews: [ reviewSchema ],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

museumSchema.virtual('avgRating')
  .get(function() {
    return Math.floor(this.reviews.reduce((sum, review) => {
      return sum + review.rating;
    }, 0) / this.reviews.length);
  });

museumSchema.set('toJSON', {
  virtuals: true
});


module.exports = mongoose.model('Museum', museumSchema);
