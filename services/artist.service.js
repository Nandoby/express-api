const db = require("../models");
const artistDTO = require("../DTO/artist.dto");
const { Op } = require("sequelize");

const artistService = {
  getAll: async () => {
    const artists = await db.Artist.findAll();

    return artists.map((artist) => new artistDTO(artist));
  },

  getById: async (id) => {
    const artist = await db.Artist.findByPk(id);

    return artist ? new artistDTO(artist) : null;
  },

  create: async (artistToAdd) => {
    const artist = await db.Artist.create(artistToAdd);

    return artist ? new artistDTO(artist) : null;
  },

  update: async (id, artistToUpdate) => {
    const updatedCount = await db.Artist.update(artistToUpdate, {
      where: { id },
    });

    return updatedCount[0] === 1;
  },

  delete: async (id) => {
    const rowsDeleted = await db.Artist.destroy({where: {id}})

    return rowsDeleted === 1
  },

  alreadyExists: async (name, surname) => {
    const artist = await db.Artist.findOne({
      where: { name, surname }
    });

    return artist ? true : false;
  },
};

module.exports = artistService;
