'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items', [
      {
        id : 1,
        name: "product1",
        price: 10,
        description: "product description",
      },
      {
        id : 2,
        name: "product2",
        price: 50,
        description: "product2 description",
      },
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
