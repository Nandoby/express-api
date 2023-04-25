const genreDTO = require("../DTO/genre.dto");
const db = require("../models");

const genreService = {
  getAll: async () => {
    const { rows, count } = await db.Genre.findAndCountAll();
    

    return {
      genres: rows.map((genre) => new genreDTO(genre)),
      count,
    };
  },

  getById: async (id) => {
    const genre = await db.Genre.findByPk(id);

    return genre ? new genreDTO(genre) : null;
  },

  create: async (genreToAdd) => {
    const genre = await db.Genre.create(genreToAdd);

    return genre ? new genreDTO(genre) : null;
  },

  update: async (id, genreToUpdate) => {
    const updateRows = await db.Genre.update(genreToUpdate, { where: { id } });

    return updateRows[0] === 1;
  },

  delete: async (id) => {
    const deletedRows = await db.Genre.destroy({ where: { id } });

    return deletedRows === 1;
  },

  alreadyExist: async (name) => {
    const genre = await db.Genre.findOne({ where: { name } });

    return genre ? true : false;
  },
};

module.exports = genreService;
