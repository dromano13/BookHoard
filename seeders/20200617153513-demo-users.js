'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(`Users`, [
      {
        name: "tester",
        username: "tester1",
        password: "tester1",
        email: "tester@test.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "tester2",
        username: "tester2",
        password: "tester2",
        email: "tester@test.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(`Users`, null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
