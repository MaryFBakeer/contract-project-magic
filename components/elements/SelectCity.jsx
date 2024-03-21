const React = require('react');

function SearchForm({ cities }) {
  return (
    <>
      <label htmlFor='city'>
        <select name='city' id='city' type='select' > 
        {cities.map((city, i) => (
            <option value={city}>{city}</option>
        ))}
        </select>
      </label>
    </>
  );
}

module.exports = SearchForm;
