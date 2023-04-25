const { request, response } = require('express')
const userService = require('../services/user.service')
const { successArrayResponse, successResponse } = require('../utils/success.response')

const userController = {

    /**
     * @param {request} req
     * @param {response} res
     */
    getAll: async (req, res) => {
        const { users, count } = await userService.getAll()
        res.status(200).json(new successArrayResponse(users, count, req ))
    },

    /**
     * @param {request} req
     * @param {response} res
     */
    getById: async (req, res) => {
        const user = await userService.getById(req.params.id)
        if (!user) {
            res.status(400).json(new successResponse(user, 400))
            return
        }
        res.status(200).json(new successResponse(user, 200))
    },

    /**
     * @param {request} req
     * @param {response} res
     */
    getByEmail: async (req, res) => {
        const email = req.params.email
        const user = await userService.getByEmail(email)
        if (!user) {
            res.status(400).json(new successResponse(user, 400))
            return
        }
        res.status(200).json(new successResponse(user, 200))
    },

    /**
     * @param {request} req
     * @param {response} res
     */
    update: (req, res) => {
        res.sendStatus(501)
    },

    /**
     * @param {request} req
     * @param {response} res
     */
    delete: (req, res) => {
        res.sendStatus(501)
    },

    /**
     * @param {request} req
     * @param {response} res
     */
    register: (req, res) => {
        res.sendStatus(501)
    },

    /**
     * @param {request} req
     * @param {response} res
     */
    login: (req, res) => {
        res.sendStatus(501)
    },
}

module.exports = userController