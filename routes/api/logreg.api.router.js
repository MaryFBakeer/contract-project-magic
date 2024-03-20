const router = require('express').Router();
const bcrypt = require('bcrypt');
const authUtils = require('../../utils/authUtils');
const jwtConfig = require('../../config/jwtConfig');

router.post('/login', async (req, res) => {
  const { login, password } = req.body;

  try {
    const user = await User.findOne({ where: { login } });
    const isRight = await bcrypt.compare(password, user.pass);

    if (isRight) {
      res.locals.user = user;

      const { accessToken, refreshToken } = authUtils({
        user: { id: user.id, email: user.email, name: user.name },
      });

      res
        .cookie(jwtConfig.refresh.type, refreshToken, {
          maxAge: jwtConfig.refresh.expiresIn,
          httpOnly: true,
        })
        .cookie(jwtConfig.access.type, accessToken, {
          maxAge: jwtConfig.access.expiresIn,
          httpOnly: true,
        });

      res.json({ message: 'success' });
    } else {
      res.json({ message: 'Неверно введены данные' });
    }
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

router.post('/registration', async (req, res) => {
  try {
    const { login, email, password, re_password } = req.body;

    const user = await User.findOne({ where: { login } });

    if (user) {
      res.json({ message: 'error' });
    } else if (password !== re_password) {
      res.json({ message: 'password' });
    } else {
      const newUser = await User.create({
        login,
        email,
        pass: await bcrypt.hash(password, 10),
      });

      res.json({ message: 'success' });
    }
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

router.get('/user/logout', async (req, res) => {
  res.clearCookie(jwtConfig.access.type).clearCookie(jwtConfig.refresh.type);
  res.redirect('/');
});

module.exports = router;
