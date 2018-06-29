const Museum = require('../models/museum');

function indexRoute(req, res, next) {
  Museum.find()
    .then(museum => res.json(museum))
    .catch(next);
}

function showRoute(req, res, next) {
  Museum.findById(req.params.id)
    .populate('reviews.author')
    .then(museum => res.json(museum))
    .catch(next);

}

function reviewCreateRoute(req, res, next) {
  req.body.author = req.currentUser;
  Museum.findById(req.params.id)
    .populate('reviews.author')
    .then(museum => {
      museum.reviews.push(req.body);
      return museum.save();
    })
    .then(museum => res.json(museum))
    .catch(next);
}

function reviewDeleteRoute(req, res, next) {
  Museum.findById(req.params.id)
    .then(museum => {
      const review = museum.reviews.id(req.params.reviewId);
      review.remove();
      return museum.save();
    })
    .then(museum => res.json(museum))
    .catch(next);
}


module.exports = {
  index: indexRoute,
  show: showRoute,
  reviewCreate: reviewCreateRoute,
  reviewDelete: reviewDeleteRoute
};
