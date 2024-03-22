const router = require('express').Router();

const { Basket, Order, Order_line, Card } = require('../../db/models');

router.delete('/removeItem/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Order_line.findOne({
      where: { id },
    });

    if (!item) {
      res.status(404).json({ message: 'Товар не найден' });
      return;
    }

    await Order_line.destroy({ where: { id } });

    res.json({ message: 'success' });
  } catch ({ message }) {
    res.status(500).json({ message: 'error', error: message });
  }
});

router.post('/makeOrder', async (req, res) => {
  try {
    const order = await Order.findOne({
      where: {
        basket_id: res.locals.user.id,
        status: false,
      },
    });

    if (!order) {
      res.status(404).json({ message: 'Заказ не найден' });
      return;
    }

    await Order.update(
      {
        status: true,
      },
      {
        where: { id: order.id },
      },
    );

    res.json({
      message: 'success',
      orderId: order.id,
      totalPrice: order.total_price,
    });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

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
        total_price: card.price,
      });

      const newLine = await Order_line.create({
        card_id: id,
        order_id: newOrder.id,
        count: 1,
      });

      res.json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

module.exports = router;
