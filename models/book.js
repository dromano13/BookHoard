'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    img: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Book.associate = function(models) {
    Book.belongsTo(models.User, {foreignKey: 'userId'})
    Book.belongsToMany(models.Format, {
      through: 'BookFormat',
      foreignKey: 'bookId',
      otherKey: 'formatId'
    });
  };
  return Book;
};