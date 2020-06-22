'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(`Formats`, [
      {
        name: "Audio",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Paperback",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hardback",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Electronic",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
