const { response, request } = require("express");
const albumService = require("../services/album.service");

const albumController = {
  /**
   *
   * @param {request} req
   * @param {response} res
   */
  getAll: async (req, res) => {
    const albums = await albumService.getAll();
    res.status(200).json(albums);
  },

  /**
   *
   * @param {request} req
   * @param {response} res
   */
  create: async (req, res) => {
    const data = req.body;
    const album = await albumService.create(data);

    if (!album) {
      res.sendStatus(400);
      return;
    }

    res.status(200).json(album);
  },

  /**
   *
   * @param {request} req
   * @param {response} res
   */
  getById: async (req, res) => {
    const album = await albumService.getById(req.params.id);

    if (!album) {
      res.status(400).json({ error: "error" });
    }

    res.status(200).json(album)
  },

  /**
   *
   * @param {request} req
   * @param {response} res
   */
  update: async (req, res) => {
    const album = await albumService.update(req.params.id, req.body)

    album ? res.sendStatus(204) : res.sendStatus(400)
  },

  /**
   *
   * @param {request} req
   * @param {response} res
   */
  delete: async (req, res) => {
    const album = await albumService.delete(req.params.id);

    album ? res.sendStatus(204) : res.sendStatus(400)
  },
};

module.exports = albumController;
