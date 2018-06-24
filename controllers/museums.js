const Museum = require('../models/museum');

function indexRoute(req, res, next) {
  Museum.find()
    .then(museum => res.json(museum))
    .catch(next);
}

function showRoute(req, res, next) {
  Museum.findById(req.params.id)
    .then(museum => res.json(museum))
    .catch(next);

}

function commentCreateRoute(req, res, next) {
  req.body.author = req.currentUser;
  Museum.findById(req.params.id)
    .populate('comments.author')
    .then(museum => {
      museum.comments.push(req.body);
      return museum.save();
    })
    .then(museum => res.json(museum))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  commentCreat: commentCreateRoute
};
