'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(`Books`, [
      {
        title: "There and Back Again",
        author: "Bilbo Baggins",
        genre: "Fantasy in a Fantasy",
        userID: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "The Lord of the Rings",
        author: "JR Tolkein",
        genre: "Fantasy",
        userID: 3,
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