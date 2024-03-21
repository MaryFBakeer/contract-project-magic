const React = require('react');

function FormUpdateAccount({ userA }) {
  return (
    <form className='formUpdate-account' data-id={userA.id}>
      <input type='text' name='name' value={userA.name} />
      <input type='text' name='login' value={userA.login} />
      <input type='text' name='email' value={userA.email} />
      <input type='text' name='city' value={userA.city} />
      <button className='btn-update-account'>Отправить</button>
    </form>
  );
}

module.exports = FormUpdateAccount;
