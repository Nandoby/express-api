const { response, request } = require("express");
const artistService = require("../services/artist.service");

const artistController = {
  /**
   *
   * @param {request} req
   * @param {response} res
   */
  getAll: async (req, res) => {
    const artists = await artistService.getAll();
    res.status(200).json(artists);
  },

  /**
   *
   * @param {request} req
   * @param {response} res
   */
  create: async (req, res) => {
    const data = req.body;

    const { name, surname } = data;

    if (await artistService.alreadyExists(name, surname)) {
      res.status(400).json({ error: "artist already exists" });
      return;
    }

    const { birthdate } = data;

    // La date d'anniversaire est non nullable
    if (!birthdate) {
      res.status(400).json({
        error: "La création a échoué",
      });

      return;
    }

    const artist = await artistService.create(data);

    if (!artist) {
      res.sendStatus(400);
      return;
    }

    return res.status(201).json(artist);
  },

  /**
   *
   * @param {request} req
   * @param {response} res
   */
  getById: async (req, res) => {
    const { id } = req.params;
    const artist = await artistService.getById(id);

    return artist ? res.status(200).json(artist) : res.sendStatus(400);
  },

  /**
   *
   * @param {request} req
   * @param {response} res
   */
  update: async (req, res) => {
    const { id } = req.params;
    const { name, surname } = req.body;

    if (!name || !surname) {
      name ?? res.status(400).json({ error: "Name property is undefined" });
      surname ??
        res.status(400).json({ error: "Surname property is undefined" });
      return;
    }

    const alreadyExists = artistService.alreadyExists(name, surname);

    if (await alreadyExists) {
      res
        .status(400)
        .json({ error: `${name} ${surname} exists already in database` });
      return;
    }

    const is_updated = await artistService.update(id, req.body);

    return is_updated ? res.sendStatus(204) : res.sendStatus(400);
  },
  /**
   *
   * @param {request} req
   * @param {response} res
   */
  delete: async (req, res) => {
    const { id } = req.params
    const isDeleted = await artistService.delete(id)
    return isDeleted ? res.sendStatus(204) : res.sendStatus(400)
  },
};

module.exports = artistController;
