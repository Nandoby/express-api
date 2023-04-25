const { Sequelize, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} sequelize
 */
module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: "UK_Email",
    },
    password: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(),
      defaultValue: "user",
    },
  });

  return User
};
