const React = require('react');

function SearchForm({ classForm }) {
  return (
    <form className={classForm}>
      <div>Поиск по названию</div>
      <label htmlFor='title'>
        <input type="text" name='title' id='title' placeholder='Введите название'/>
      </label>
      
    </form>
  );
}

module.exports = SearchForm;
