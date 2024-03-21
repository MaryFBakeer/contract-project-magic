const React = require('react');
const Layout = require('../Layout');

function Basket({ title, user, basket }) {
  return (
    <Layout user={user} title={title}>
      <div className='basketPage'>
        {basket ? (
          basket.map((order) => {
            <div className='order'></div>;
          })
        ) : (
          <div>Заказов нет</div>
        )}
      </div>
    </Layout>
  );
}

module.exports = Basket;
