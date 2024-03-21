const router = require('express').Router();
const { Card } = require('../../db/models');
const CardItem = require('../../components/elements/CardItem');

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
    if (card) {
      const html = res.renderComponent(CardItem, { card }, { doctype: false });
      console.log(html);
      res.status(201).json({ message: 'success', html });
      return;
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
