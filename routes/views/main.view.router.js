const router = require('express').Router();
const Account = require('../../components/pages/Account');
const MainPage = require('../../components/pages/MainPage');
const { Card } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { user } = res.app.locals;
    const cards = await Card.findAll();
    res.send(
      res.renderComponent(MainPage, { user, title: 'Главная страница', cards })
    );
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

router.get('/account', async (req, res) => {
  try {
    const { user } = res.app.locals;
    res.send(res.renderComponent(Account, { user, title: 'Главная страница' }));
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

module.exports = router;
