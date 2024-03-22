const React = require('react');
const SelectCity = require('./SelectCity')

function SearchForm({ cities, classForm }) {
  return (
    <form className={classForm} action='submit'>
      <div>Выбрать город:</div>
      <SelectCity cities={cities}/>
    </form>
  );
}

module.exports = SearchForm;
