const trackRouter = require("express").Router();
const trackController = require("../controllers/track.controller");
const bodyValidator = require("../middlewares/validator.middleware");
const createTrackValidator = require("../validators/track.validator");

trackRouter
  .route("/")
  .get(trackController.getAll)
  .post(bodyValidator(createTrackValidator), trackController.create);
trackRouter
  .route("/:id")
  .get(trackController.getById)
  .put(trackController.update)
  .delete(trackController.delete)
  .post(trackController.addArtist);

trackRouter.route("/:trackId/:artistId").delete(trackController.removeArtist);

module.exports = trackRouter;
