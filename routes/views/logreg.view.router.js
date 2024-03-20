const router = require('express').Router();

const LoginPage = require('../../components/pages/LoginPage');
const RegPage = require('../../components/pages/RegPage');

router.get('/login', async (req, res) => {
  try {
    const html = res.renderComponent(LoginPage, {
      title: 'Login',
    });

    res.send(html);
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

router.get('/registration', async (req, res) => {
  try {
    const html = res.renderComponent(RegPage, {
      title: 'Registration',
    });

    res.send(html);
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

module.exports = router;
