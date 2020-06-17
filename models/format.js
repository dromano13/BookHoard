'use strict';
module.exports = (sequelize, DataTypes) => {
  const Format = sequelize.define('Format', {
    name: DataTypes.STRING
  }, {});
  Format.associate = function(models) {
    // associations can be defined here
  };
  return Format;
};