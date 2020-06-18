'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    img: DataTypes.STRING,
  }, {});
  Book.associate = function(models) {
    Book.belongsTo(models.User, {
      foreignKey: `userId`
    }),
    Book.belongsToMany(models.Format, {
      through: 'BookFormat',
      foreignKey: 'bookId',
      otherKey: 'formatId'
    });
    // associations can be defined here
  };
  return Book;
};