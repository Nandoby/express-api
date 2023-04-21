class ArtistDTO {
  constructor({
    id,
    name,
    surname,
    birthdate,
    deathdate,
    createdAt,
    updatedAt,
  }) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.birthdate = birthdate;
    this.deathdate = deathdate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = ArtistDTO