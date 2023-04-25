const argon2 = require("argon2");
const db = require("../models");
const UserDTO = require("../DTO/user.dto");
const userService = require("./user.service");

const authService = {
  register: async (userToAdd) => {
    const pwdHash = await argon2.hash(userToAdd.password);

    userToAdd.password = pwdHash;

    if (await userService.alreadyExist(userToAdd.email)) {
      return null;
    }

    const user = await db.User.create(userToAdd);

    return user ? new UserDTO(user) : null;
  },

  login: async (email, password) => {
    const user = await db.User.findOne({ where: { email } });

    if (!user) {
      return null;
    }

    const isValidPassword = await argon2.verify(user.password, password);

    return isValidPassword ? new UserDTO(user) : null
  },
};

module.exports = authService;
