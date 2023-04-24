const albumDTO = require("../DTO/album.dto");
const db = require("../models");

const albumService = {
  getAll: async () => {
    const albums = await db.Album.findAll();
    return albums.map((artist) => new albumDTO(artist));
  },
  create: async (albumToAdd) => {
    const album = await db.Album.create(albumToAdd);
    return album ? album : null;
  },
  getById: async (id) => {
    const album = await db.Album.findByPk(id);
    return album ? album : null;
  },
  update: async (id, albumUpdated) => {
    const affectedRows = await db.Album.update(albumUpdated, { where: { id } });

    return affectedRows[0] === 1;
  },
  delete: async (id) => {
    const deletedRows = await db.Album.destroy({ where: { id } });
    return deletedRows === 1;
  },
};

module.exports = albumService;
