const React = require('react');
const Layout = require('../Layout');
const ContainerCard = require('../elements/ContainerCard');
const SearchForm = require('../elements/searchForm');
const SearchName = require('../elements/searchName');

function MainPage({ title, user, cards, cities, classForm, owner }) {
  return (
    <Layout user={user} title={title}>
      <div className='mainPage'>

        <div className='filterDiv'>
          <SearchForm cities={cities} classForm={classForm} />
          <SearchName classForm='findName' />
        </div>
        <ContainerCard cards={cards} user={user} owner={owner}/>

      </div>
    </Layout>
  );
}

module.exports = MainPage;
