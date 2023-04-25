const userRouter = require("express").Router();
const userController = require("../controllers/user.controller");
const pagination = require("../middlewares/pagination.middleware");

userRouter
  .route("/")
  .get(pagination(), userController.getAll)
  .post(userController.register);

userRouter
  .route("/:id(\\d+)")
  .get(userController.getById)
  .patch(userController.update)
  .delete(userController.delete);
userRouter.route("/:email").get(userController.getByEmail);

module.exports = userRouter;
