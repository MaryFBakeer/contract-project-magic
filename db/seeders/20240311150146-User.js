/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const password = await bcrypt.hash('123456', 5);
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Админ',
        city: 'Санкт-Петербург'
      },
      {
        name: 'Маша',
        city: 'Монштадт'
      },
      {
        name: 'Даня',
      },
      {
        name: 'Жора',
      },
      {
        name: 'Дима',
      },
    ].map((el, i) => ({
      ...el,
      login: `User${i + 1}`,
      email: `User${i + 1}_${el.name}@email.com`,
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
    })), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
