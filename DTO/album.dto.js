const TrackDto = require("./track.dto");

class albumDTO {
  constructor({ id, title, cover, Track }) {
    this.id = id;
    this.title = title;
    this.cover = cover ?? null;
    this.tracks = Track?.map(t => new TrackDto(Track))
  }
}

module.exports = albumDTO
