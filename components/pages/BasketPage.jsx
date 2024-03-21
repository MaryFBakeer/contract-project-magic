const React = require('react');
const Layout = require('../Layout');

function BasketPage({ title, user, newOrder, completedOrders }) {
  return (
    <Layout user={user} title={title}>
      <div className='newOrder'>
        <p>Корзина</p>
        {newOrder ? (
          <div className='orders'>
            <p>Заказ: {newOrder.id}</p>
            <div className='cards'>
              {newOrder.Order_lines.map((card) => (
                <p>{card.Card.title}</p>
              ))}
            </div>
          </div>
        ) : (
          <div>Корзина пуста</div>
        )}
      </div>
      <div className='completedOrders'>
        <p>Выполненные заказы</p>
        {completedOrders ? (
          completedOrders.map((order) => (
            <div className='orders'>
              <p>Заказ: {order.id}</p>
              <div className='cards'>
                {order.Order_lines.map((card) => (
                  <p>{card.Card.title}</p>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div>Вы еще ничего не заказывали</div>
        )}
      </div>
    </Layout>
  );
}

module.exports = BasketPage;
