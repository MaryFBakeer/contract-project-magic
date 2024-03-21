const router = require('express').Router();

const { Order, Order_line, Card } = require('../../db/models');

const BasketPage = require('../../components/pages/BasketPage');

router.get('/', async (req, res) => {
  try {
    const newOrder = await Order.findOne({
      where: { basket_id: res.locals.user.id, status: 'false' },
      include: {
        model: Order_line,
        include: {
          model: Card,
        },
      },
    });

    const completedOrders = await Order.findAll({
      where: { basket_id: res.locals.user.id, status: 'true' },
      include: {
        model: Order_line,
        include: {
          model: Card,
        },
      },
    });

    const html = res.renderComponent(BasketPage, { newOrder, completedOrders });

    res.send(html);
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

module.exports = router;
