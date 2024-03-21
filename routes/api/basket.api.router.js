const router = require('express').Router();

const { Order, Order_line, Card } = require('../../db/models');

router.post('/:id', async (req, res) => {
  try {
    const order = await Order.findOne({ where: { status } });
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

module.exports = router;
