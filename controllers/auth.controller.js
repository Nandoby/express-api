const authService = require("../services/auth.service")
const { successResponse } = require("../utils/success.response")

const authController = {

    register: async (req, res) => {
        const data = req.body
        const user = await authService.register(data)

        if (!user) {
            res.sendStatus(400)
            return
        }

        res.status(201).json(new successResponse(user, 200))
    },

    login: async (req, res) => {
        res.sendStatus(501)
    },
}

module.exports = authController