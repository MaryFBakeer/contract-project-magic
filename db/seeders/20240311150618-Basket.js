/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Baskets', [
      {
        user_id: 1,
      },
      {
        user_id: 2,
      },
      {
        user_id: 3,
      },
      {
        user_id: 4,
      },
    ].map((el) => ({
      ...el,
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
    await queryInterface.bulkDelete('Baskets', null, {});
  },
};
