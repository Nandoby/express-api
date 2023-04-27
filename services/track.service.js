const TrackDto = require("../DTO/track.dto");
const TrackDTO = require("../DTO/track.dto");
const db = require("../models");

const getAll = async () => {
  const { rows, count } = await db.Track.findAndCountAll({
    include: [db.Artist]
  });

  return {
    tracks: rows.map((track) => new TrackDTO(track)),
    count,
  };
};

const create = async (trackToAdd) => {
  let track;
  const transaction = await db.sequelize.transaction();

  try {
    track = await db.Track.create(trackToAdd, {transaction: transaction});
    await track.addAlbum(trackToAdd.albums, {transaction: transaction});

    // Définir la valeur d'une colonne de la table intermediaire.
    for (const artist of trackToAdd.artists) {
      await track.addArtist(artist.id, {through: {feat: artist.feat}, transaction: transaction})
    }

    // await track.addArtist(trackToAdd.artists, {transaction: transaction})

    await transaction.commit()

    const addedTrack = await db.Track.findByPk(track.id, {
      include: [db.Genre, db.Artist, db.Album]
    })

    return addedTrack ? new TrackDto(addedTrack) : null
  } catch (error) {
    console.log(error)
    await transaction.rollback()

    return null;
  }
};

const getById = async (id) => {
  const track = await db.Track.findByPk(id, {
    include: [db.Genre, db.Album, db.Artist],
  });

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

const addArtist = async (trackId, artistToAdd) => {
  try {
    const track = await db.Track.findByPk(trackId)
    console.log(">>>> TRACK : ", track)
    await track.addArtist(artistToAdd.id, {through: {feat: artistToAdd.feat}})
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const removeArtist = async (trackId, artistId) => {
  try {
    const track = await db.Track.findByPk(trackId)
    await track.removeArtist(artistId)
    return true 
  } catch (error) {
    console.log(error)
    return false
  }
}

const TrackService = { getAll, create, getById, update, deleted, addArtist, removeArtist };

module.exports = TrackService;
