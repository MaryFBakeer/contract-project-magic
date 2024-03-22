const React = require('react');
const Layout = require('../Layout');

function BasketPage({ title, user, newOrder, completedOrders }) {
  return (
    <Layout user={user} title={title}>
      <div className='newOrder'>
        <p className='coc'>Корзина</p>
        {newOrder ? (
          <div className='orders'>
            <div className='cards'>
              <p>
                Заказ: {newOrder.id} | Общая стоимость: {newOrder.total_price}
              </p>
              <form className='makeOrder'>
                {newOrder.Order_lines.map((card) => (
                  <div>
                    <label htmlFor='order_line'>
                      Товар: {card.Card.title} | Кол-во: {card.count}
                    </label>
                    <button
                      type='button'
                      className='removeItemButton'
                      data-id={card.id}
                    >
                      Удалить товар
                    </button>
                  </div>
                ))}
                <button className='makeOrderButton'>Заказать</button>
              </form>
            </div>
          </div>
        ) : (
          <div>Корзина пуста</div>
        )}
      </div>
      <div className='completedOrders'>
        <p className='coc'>Выполненные заказы</p>
        {completedOrders ? (
          completedOrders.map((order) => (
            <div className='orders'>
              <p>
                Заказ: {order.id} | Общая стоимость: {order.total_price}
              </p>
              <div className='cards'>
                {order.Order_lines.map((card) => (
                  <p>
                    Товар: {card.Card.title} | Кол-во: {card.count}
                  </p>
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
