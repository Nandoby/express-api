const TrackDTO = require("../DTO/track.dto");
const db = require("../models");

const getAll = async () => {
  const {rows, count} = await db.Track.findAndCountAll()
  
  return {
    tracks: rows.map(track => new TrackDTO(track)),
    count
  }
};

const create = async (trackAdded) => {
  const track = await db.Track.create(trackAdded);

  return track ? track : null;
};

const getById = async (id) => {
  const track = await db.Track.findByPk(id);

  return track ? new TrackDTO(track) : null;
};

const update = async (id, trackUpdated) => {
  const updatedRows = await db.Track.update(trackUpdated, { where: { id } });

  return updatedRows[0] === 1;
};

const deleted = async (id) => {
  const deletedRows = await db.Track.destroy({ where: { id } });
  return deletedRows === 1;
};

const TrackService = { getAll, create, getById, update, deleted };

module.exports = TrackService;
