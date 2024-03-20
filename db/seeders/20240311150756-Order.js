/** @type {import('sequelize-cli').Migration} */
// const {Order_line} = require('../models')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        basket_id: 1,
        status: true,
      },
      {
        basket_id: 1,
        status: true,
      },
      {
        basket_id: 2,
        status: false,
      },
      {
        basket_id: 3,
        status: true,
      },
      {
        basket_id: 1,
        status: true,
      },
      {
        basket_id: 4,
        status: false,
      },
    ].map((el) => ({
      ...el,
      total_price: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    })), {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
