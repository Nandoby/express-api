const artistRouter = require('express').Router();
const artistController = require('../controllers/artist.controller');
const authJwt = require('../middlewares/auth.jwt.middleware')

artistRouter.route('/')
    .get(authJwt(),artistController.getAll)
    .post(artistController.create)
artistRouter.route('/:id')
    .get(artistController.getById)
    .put(artistController.update)
    .delete(artistController.delete)

module.exports = artistRouter;