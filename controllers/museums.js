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

module.exports = {
  index: indexRoute,
  show: showRoute
};
