const argon2 = require('argon2')
const db = require('../models')
const UserDTO = require('../DTO/user.dto')
const userService = require('./user.service')

const authService = {

    register: async (userToAdd) => {
        const pwdHash = await argon2.hash(userToAdd.password)

        userToAdd.password = pwdHash

        if (await userService.alreadyExist(userToAdd.email)) {
            return null;
        }

        const user = await db.User.create(userToAdd);

        return user ? new UserDTO(user) : null
    },

    login: async () => {

    }
}

module.exports = authService