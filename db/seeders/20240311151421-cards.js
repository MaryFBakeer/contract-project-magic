/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Cards', [
      {
        title: 'Огненный чорт / Ленин',
        img: '/img/id1_lenin.jpg',
        price: 100,
        degree: 'Новая',
        user_id: 1,
      },
      {
        title: 'Артефакт',
        img: '/img/id2_artef.jpg',
        price: 100,
        degree: 'Новая',
        user_id: 2,
      },
      {
        title: 'Заклинание',
        img: '/img/id3_perk.jpg',
        price: 100,
        degree: 'Новая',
        user_id: 1,
      },
      {
        title: 'Элементаль"',
        img: '/img/id4_elemental.jpg',
        price: 100,
        degree: 'Новая',
        user_id: 1,
      },
      {
        title: 'Зомби-гоблины',
        img: '/img/id5_zombie_goblin.jpg',
        price: 100,
        degree: 'Новая',
        user_id: 2,
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
    await queryInterface.bulkDelete('Cards ', null, {});
  },
};
