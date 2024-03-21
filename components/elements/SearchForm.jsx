const React = require('react');

function SearchForm({ cities, classForm }) {
  return (
    <form className={classForm} action='submit'>
      <label htmlFor='city'>
       
        <select name='city' id='city' type='select' > 
        {cities.map((city) => (
            <option>{city}</option>
        ))}
        </select>
      </label>
      
    </form>
  );
}

module.exports = SearchForm;
