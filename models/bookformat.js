'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookFormat = sequelize.define('BookFormat', {
    bookId: DataTypes.INTEGER,
    formatId: DataTypes.INTEGER
  }, {});
  BookFormat.associate = function(models) {
    // associations can be defined here
  };
  return BookFormat;
};