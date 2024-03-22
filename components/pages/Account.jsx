const React = require('react');
const Layout = require('../Layout');
const FormAddCard = require('../elements/FormAddCard2');
const ContainerCard = require('../elements/ContainerCard');

function Account({ title, userA, user, cards, owner }) {
  console.log(userA);
  return (
    <Layout title={title} user={user}>
      <div className='accountPage'>
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
        <ContainerCard cards={cards} user={user} owner={owner} />
      </div>
    </Layout>
  );
}

module.exports = Account;
