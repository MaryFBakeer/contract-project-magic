const router = require('express').Router();
const MainPage = require('../../components/pages/MainPage');
const { Card } = require('../../db/models');
const cities = ['Санкт-Петербург', 'Москва', 'Челябинск', 'Трехгорный', 'Либерти-Сити', 'Вайтран', 'Новиград', 'Монштадт', 'Валь\'шара']

router.get('/', async (req, res) => {
  try {
    const { user } = res.app.locals;
    const cards = await Card.findAll();
    res.send(
      res.renderComponent(MainPage, { user, title: 'Главная страница', cards, cities, classForm: 'mainCityFormFilter' })
    );
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

module.exports = router;
