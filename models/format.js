'use strict';
module.exports = (sequelize, DataTypes) => {
  const Format = sequelize.define('Format', {
    name: DataTypes.STRING
  }, {});
  Format.associate = function(models) {
    Format.belongsToMany(models.Book, {
      through: 'BookFormat',
      foreignKey: 'formatId',
      otherKey: 'bookId'
    });
  };
  return Format;
};