const router = require('express').Router();
const Account = require('../../components/pages/Account');
const MainPage = require('../../components/pages/MainPage');
const FormUpdateAccount = require('../../components/elements/FormUpdateAccount');
const { Card, User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { user } = res.app.locals;
    const cards = await Card.findAll();
    res.send(
      res.renderComponent(MainPage, { title: 'Главная страница', cards })
    );
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

router.get('/account', async (req, res) => {
  try {
    const user_id = res.locals.user.id;
    const userA = await User.findOne({ where: { id: user_id } });
    res.send(res.renderComponent(Account, { title: 'Личный кабинет', userA }));
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

router.get('/account/updateAc', async (req, res) => {
  const user_id = res.locals.user.id;
  const userA = await User.findOne({ where: { id: user_id } });
  const html = res.renderComponent(
    FormUpdateAccount,
    { userA },
    { doctype: false }
  );
  res.status(201).json({ message: 'success', html });
});
module.exports = router;
