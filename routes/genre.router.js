const genreRouter = require('express').Router();
const genreController = require('../controllers/genre.controller');

genreRouter.route('/')
    .get(genreController.getAll)
    .post(genreController.create)
genreRouter.route('/:id')
    .get(genreController.getById)
    .put(genreController.update)
    .delete(genreController.delete)

module.exports = genreRouter;