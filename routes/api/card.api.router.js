const router = require('express').Router();
const { Card } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { user } = res.locals;
    const { title, img, price, degree } = req.body;
    const data = {
      title,
      img,
      price,
      degree,
      user_id: user.id,
    };

    const card = await Card.create(data);
    console.log(card);
    if (card) {
      const html = res.renderComponent(CardItem, card, { doctype: false });
      res.status(201).json({ message: 'success', html });
      return;
    } else {
      res.json({ message: 'ДЕБИЛЫ' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
