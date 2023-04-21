const { response, request } = require("express");
const genreService = require("../services/genre.service");

const genreController = {
  /**
   *
   * @param {request} req
   * @param {response} res
   */
  getAll: async (req, res) => {
    const genres = await genreService.getAll();

    res.status(200).json(genres);
  },

  /**
   *
   * @param {request} req
   * @param {response} res
   */
  create: async (req, res) => {
    const data = req.body;

    const genre = await genreService.create(data);

    if (!genre) res.sendStatus(418);

    res.location("/genre/" + genre.id);

    res.status(201).json(genre);
  },

  /**
   *
   * @param {request} req
   * @param {response} res
   */
  getById: async (req, res) => {
    const genre = await genreService.getById(req.params.id);

    if (!genre) {
      res.sendStatus(418);
    }

    res.status(200).json(genre);
  },

  /**
   *
   * @param {request} req
   * @param {response} res
   */
  update: async (req, res) => {
    const genre = await genreService.update(req.params.id);

    if (!genre) {
      res.sendStatus(418);
    }

    res.status(200).json(genre);
  },

  /**
   *
   * @param {request} req
   * @param {response} res
   */
  delete: async (req, res) => {
    const isDelete = await genreService.delete(req.params.id)

    if (!isDelete) {
        res.sendStatus(400)
    }

    res.sendStatus

  },
};

module.exports = genreController;
