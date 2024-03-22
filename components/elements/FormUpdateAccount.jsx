const React = require('react');
const SearchForm = require('./SelectCity');
function FormUpdateAccount({ userA, cities }) {
  return (
    <form className='formUpdate-account' data-id={userA.id}>
      <input type='text' name='name' value={userA.name} />
      <input type='text' name='login' value={userA.login} />
      <input type='text' name='email' value={userA.email} />
      <select id='citySelect'>
        <option value={userA.city}>{userA.city}</option>
        {cities.map(
          (city) => userA.city !== city && <option value={city}>{city}</option>
        )}
      </select>

      <button className='btn-update-account'>Отправить</button>
    </form>
  );
}

module.exports = FormUpdateAccount;
