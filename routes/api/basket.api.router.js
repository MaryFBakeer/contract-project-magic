const router = require('express').Router();

const { Basket, Order, Order_line, Card } = require('../../db/models');

router.post('/add', async (req, res) => {
  try {
    const { id } = req.body;
    const card = await Card.findOne({ where: { id } });

    const order = await Order.findOne({
      include: {
        model: Basket,
        where: { user_id: res.locals.user.id },
      },
      where: { status: false },
    });

    if (order && card) {
      const line = await Order_line.findOne({
        where: { card_id: card.id, order_id: order.id },
      });

      if (line) {
        line.count += 1;
        await Order_line.update(
          { count: line.count },
          {
            where: { card_id: card.id, order_id: order.id },
          },
        );
      } else {
        const newLine = await Order_line.create({
          card_id: card.id,
          order_id: order.id,
          count: 1,
        });
      }

      order.total_price += card.price;
      await Order.update(
        { total_price: order.total_price },
        { where: { id: order.id } },
      );

      res.json({ message: 'success' });
    } else {
      const newOrder = await Order.create({
        basket_id: res.locals.user.id,
        status: false,
        total_price: 0,
      });

      const newLine = await Order_line.create({
        card_id: id,
        order_id: newOrder.id,
        count: 1,
      });

      order.total_price += card.price;
      await Order.update(
        { total_price: order.total_price },
        { where: { id: newOrder.id } },
      );

      res.json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

module.exports = router;
