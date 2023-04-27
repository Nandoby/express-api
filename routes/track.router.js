const trackRouter = require('express').Router();
const trackController = require('../controllers/track.controller');

trackRouter.route('/')
    .get(trackController.getAll)
    .post(trackController.create)
trackRouter.route('/:id')
    .get(trackController.getById)
    .put(trackController.update)
    .delete(trackController.delete)
    .post(trackController.addArtist)

trackRouter.route('/:trackId/:artistId')
    .delete(trackController.removeArtist)

module.exports = trackRouter;