const router = require('express').Router();

const albumRouter = require('./album.router');
const artistRouter = require('./artist.router');
const authRouter = require('./auth.router');
const genreRouter = require('./genre.router');
const trackRouter = require('./track.router');
const userRouter = require('./user.router');

router.use('/track', trackRouter);
router.use('/artist', artistRouter);
router.use('/album', albumRouter);
router.use('/genre', genreRouter);
router.use('/user', userRouter)
router.use('/auth', authRouter)

module.exports = router;