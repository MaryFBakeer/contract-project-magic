const React = require('react');
const Layout = require('../Layout');
const FormAddCard = require('../elements/FormAddCard');

function Account({ title, userA, user }) {
  return (
    <Layout title={title} user={user}>
      <h1>Личный кабинет</h1>
      <h2>Информация обо мне</h2>
      <div className='container_account'>
        <p>{!userA.name ? 'Неизвестен' : userA.name}</p>
        <p>{userA.login}</p>
        <p>{userA.email}</p>
        <p>{!userA.city ? 'Неизвестен' : userA.city}</p>
        <button className='update-account'>Изменить</button>
      </div>
      <h3>Добавить карточку</h3>
      <FormAddCard />
    </Layout>
  );
}

module.exports = Account;
