const db = require("../models");
const UserDTO = require("../DTO/user.dto");

const userService = {
  getAll: async () => {
    const { count, rows } = await db.User.findAndCountAll();

    return {
      users: rows.map((user) => new UserDTO(user)),
      count,
    };
  },

  getById: async (id) => {
    const user = await db.User.findByPk(id);
    return user ? new UserDTO(user) : null;
  },

  getByEmail: async (email) => {
    const user = await db.User.findOne({ where: { email } });
    return user ? new UserDTO(user) : null;
  },

  alreadyExist: async (email) => {
    const user = await db.User.findOne({ where: { email } });
    return !!user;
  },
  
};

module.exports = userService;
