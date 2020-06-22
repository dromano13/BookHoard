'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      {
          title:'book1',
          author: 'author1',
          genre: 'genre1',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        title:'book2',
        author: 'author2',
        genre: 'genre2',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
