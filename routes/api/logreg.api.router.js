const router = require('express').Router();
const bcrypt = require('bcrypt');
const authUtils = require('../../utils/authUtils');
const jwtConfig = require('../../config/jwtConfig');

const { User } = require('../../db/models');

router.post('/login', async (req, res) => {
  const { login, password } = req.body;

  try {
    const user = await User.findOne({ where: { login } });
    const isRight = await bcrypt.compare(password, user.password);

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
    console.log(login);

    if (
      !login.trim() ||
      !email.trim() ||
      !password.trim() ||
      !re_password.trim()
    ) {
      res.json({ message: 'inputs' });
      return;
    } else if (password !== re_password) {
      res.json({ message: 'password' });
      return;
    }

    if (
      !login.trim() ||
      !email.trim() ||
      !password.trim() ||
      !re_password.trim()
    ) {
      res.json({ message: 'inputs' });
      return;
    } else if (password !== re_password) {
      res.json({ message: 'password' });
      return;
    }

    const user = await User.findOne({ where: { login } });

    if (user) {
      res.json({ message: 'user' });
      return;
    } else {
      const newUser = await User.create({
        login,
        email,
        password: await bcrypt.hash(password, 10),
      });

      const { accessToken, refreshToken } = authUtils({
        user: { id: newUser.id, email: newUser.email, name: newUser.name },
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
      return;
    }
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

router.get('/logout', async (req, res) => {
  res.clearCookie(jwtConfig.access.type).clearCookie(jwtConfig.refresh.type);
  res.redirect('/');
});

module.exports = router;
