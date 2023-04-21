const router = require('express').Router();

const albumRouter = require('./album.router');
const artistRouter = require('./artist.router');
const genreRouter = require('./genre.router');
const trackRouter = require('./track.router');

router.use('/track', trackRouter);
router.use('/artist', artistRouter);
router.use('/album', albumRouter);
router.use('/genre', genreRouter);

module.exports = router;