const { response, request } = require("express")

const albumController = {
    /**
     * 
     * @param {request} req 
     * @param {response} res 
     */
    getAll : (req, res) => {
        res.sendStatus(501)
    }

    , 
    /**
    * 
    * @param {request} req 
    * @param {response} res 
    */
    create : (req, res) => {
        res.sendStatus(501)
    }

    , 
    /**
    * 
    * @param {request} req 
    * @param {response} res 
    */
    getById : (req, res) => {
        res.sendStatus(501)
    }

    , 
    /**
    * 
    * @param {request} req 
    * @param {response} res 
    */
    update : (req, res) => {
        res.sendStatus(501)
    }

    , 
    /**
    * 
    * @param {request} req 
    * @param {response} res 
    */
    delete : (req, res) => {
        res.sendStatus(501)
    }
}

module.exports = albumController;