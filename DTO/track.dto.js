const albumDTO = require("./album.dto")
const ArtistDTO = require("./artist.dto")
const genreDTO = require("./genre.dto")

class TrackDto {
    constructor({id, title, duration, Genre, Albums, Artists}) {
        this.id = id 
        this.title = title 
        this.duration = duration
        this.Genre = Genre
        this.Albums = Albums?.map(a => new albumDTO(a))
        this.Artists = Artists?.map(a => new ArtistDTO(a))
    }
}

module.exports = TrackDto