const React = require('react');

function FormElem({ classForm, children }) {
  return (
    <form className={classForm} action='submit'>
        <input name='login' type='text' required placeholder='login'/>
        <input name='password' type='password' required  placeholder='password'/>
      {children}
    </form>
  );
}

module.exports = FormElem;
