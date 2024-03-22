const router = require('express').Router();
const { User, Card } = require('../../db/models');
const Container = require('../../components/elements/ContainerCard');

router.post('/', async (req, res) => {
  let users;
  const owner = await User.findAll();
  try {
    const { city } = req.body;
    if (city === 'Все города') {
      users = await User.findAll();
    } else {
      users = await User.findAll({ where: { city } });
    }
    if (users) {
      const cards = (
        await Promise.all(
          users.map((el) => Card.findAll({ where: { user_id: el.id } })),
        )
      ).flat();
      const html = res.renderComponent(
        Container,
        { cards, owner },
        { doctype: false },
      );
      res.status(200).json({ message: 'success', html });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
