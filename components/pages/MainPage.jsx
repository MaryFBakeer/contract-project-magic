const React = require('react');
const Layout = require('../Layout');
const ContainerCard = require('../elements/ContainerCard');

function MainPage({ title, user, cards }) {
  return (
    <Layout user={user} title={title}>
      <div className='mainPage'>
        <ContainerCard cards={cards} />
      </div>
    </Layout>
  );
}

module.exports = MainPage;
