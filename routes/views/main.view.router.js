const router = require('express').Router();
const MainPage = require('../../components/pages/MainPage');

router.get('/', (req, res) => {
  try {
    const { user } = res.app.locals;
    res.send(res.renderComponent(MainPage, user));
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

module.exports = router;
