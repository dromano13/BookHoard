'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    userID: DataTypes.INTEGER,
    img: DataTypes.STRING,
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};