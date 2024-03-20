const React = require('react');

function FormElem({ classForm, children }) {
  return (
    <form className={classForm} action='submit'>
      <label>
        Login
        <input name='login' type='text' required />
      </label>
      <label>
        Password
        <input name='password' type='password' required />
      </label>
      {children}
    </form>
  );
}

module.exports = FormElem;
