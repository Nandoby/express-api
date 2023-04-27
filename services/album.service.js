const albumDTO = require("../DTO/album.dto");
const db = require("../models");

const albumService = {
  getAll: async (limit, offset) => {

    const {rows, count} = await db.Album.findAndCountAll({limit, offset})
    return {
      albums: rows.map(album => new albumDTO(album)),
      count
    }
  },
  create: async (albumToAdd) => {
    let album;

    const transaction = await db.sequelize.transaction()

    try {
      album = await db.Album.create(albumToAdd);

      await album.addTrack(albumToAdd.tracks, { transaction: transaction})

      await transaction.commit();
""
      return new albumDTO(album);
    } catch (error) {

      console.log(error);
      transaction.rollback();
    }
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

  addTrack: async (albumId, trackId) => {
    try {
      
      const album = await db.Album.findByPk(albumId)

      await album.addTrack(trackId)

      return true 

    } catch (error) {
      console.log(error)
      return false 
    }
  }
};

module.exports = albumService;
