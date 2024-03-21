const React = require('react');

function FormUpdateAccount({ user }) {
  return (
    <form className='formUpdate-account'>
      <input type='text' name='name' value={user.name} />
      <input type='text' name='login' value={user.login} />
      <input type='text' name='email' value={user.email} />
      <input type='text' name='city' value={user.city} />
      <button className='btn-update-account'>Изменить</button>
    </form>
  );
}

module.exports = FormUpdateAccount;
