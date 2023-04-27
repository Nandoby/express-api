const authService = require("../services/auth.service");
const userService = require("../services/user.service");
const errorResponse = require("../utils/error.response");
const jwt = require("../utils/jwt.utils");
const { successResponse } = require("../utils/success.response");

const authController = {
  register: async (req, res) => {
    const data = req.body;
    // const user = await authService.register(data)

    if (await userService.alreadyExist(data.email)) {
      res.status(400).json(new errorResponse("L'email est déjà utilisée", 400));
      return;
    }

    const user = await authService.register(data);

    if (!user) {
      res
        .status(404)
        .json(new errorResponse("L'email ou le mot de passe est invalide"));
      return;
    }

    res.status(201).json(new successResponse(user, 200));
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await authService.login(email, password);

    if (!user) {
      res
        .status(400)
        .json(new errorResponse("email ou mot de passe invalide", 400));
      return;
    }

    const token = await jwt.generate(user)

    res.status(200).json(new successResponse({user, token}, 201));
  },
};

module.exports = authController;
