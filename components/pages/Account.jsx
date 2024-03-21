const React = require('react');
const Layout = require('./Layout');

function Account({ title, user }) {
  return (
    <Layout title={title}>
      <h1>Личный кабинет</h1>
      <h2>Информация обо мне</h2>
      <p>{user.name === '' ? 'Неизвестен' : user.name}</p>
      <p>{user.login}</p>
      <p>{user.email}</p>
      <p>{user.city === '' ? 'Неизвестен' : user.city}</p>
      <button>Изменить</button>
      <p>Добавить карточку</p>
      <FormAddCard />
    </Layout>
  );
}

module.exports = Account;
