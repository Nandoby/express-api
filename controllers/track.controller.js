const { response, request } = require("express")
const trackService = require('../services/track.service')

const trackController = {
    /**
     * 
     * @param {request} req 
     * @param {response} res 
     */
    getAll : async (req, res) => {
        const track = await trackService.getAll()
        res.status(200).json(track)
    }

    , 
    /**
    * 
    * @param {request} req 
    * @param {response} res 
    */
    create : async (req, res) => {
        const data = req.body
        const track = await trackService.create(data) 

        track ? res.status(200).json(track) : res.sendStatus(400)

    }

    , 
    /**
    * 
    * @param {request} req 
    * @param {response} res 
    */
    getById : async (req, res) => {

        const { id } = req.params
        const track = await trackService.getById(id)

        track ? res.status(200).json(track) : res.sendStatus(400)
    }

    , 
    /**
    * 
    * @param {request} req 
    * @param {response} res 
    */
    update : async (req, res) => {
        const { id } = req.params 
        const data = req.body
        const is_updated = await trackService.update(id, data)

        is_updated ? res.sendStatus(204) : res.sendStatus(400)
    }

    , 
    /**
    * 
    * @param {request} req 
    * @param {response} res 
    */
    delete : async (req, res) => {
        const { id } = req.params
        const is_updated = await trackService.deleted(id)

        is_updated ? res.sendStatus(204) : res.sendStatus(400)
    },

    /**
     * @param {request} req 
     * @param {response} res 
     */
    addArtist: async (req, res) => {
        const {id} = req.params 
        const data = req.body 
        
        res.sendStatus(await trackService.addArtist(id, data) ? 200 : 400)
    },

    /**
     * @param {request} req 
     * @param {response} res 
     */
    removeArtist: async (req, res) => {
        const {trackId, artistId} = req.params;

        res.sendStatus(await trackService.removeArtist(trackId, artistId) ? 200 : 400)
    }
}

module.exports = trackController;