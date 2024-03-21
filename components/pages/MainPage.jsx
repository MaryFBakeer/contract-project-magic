const React = require('react');
const Layout = require('../Layout');
const ContainerCard = require('../elements/ContainerCard');
const SearchForm = require('../elements/searchForm');

function MainPage({ title, user, cards, cities, classForm }) {
  return (
    <Layout user={user} title={title}>
      <div className='mainPage'>
        <SearchForm cities={cities} classForm={classForm}/>
        <ContainerCard cards={cards} user={user}/>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
