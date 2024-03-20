const React = require('react');
const Layout = require('../Layout');
const FormElem = require('../elements/FormElem');

function RegPage({ title }) {
  return (
    <>
      <Layout title={title}>
        <FormElem classForm={'registration'}>
          <label>
            Repeat password
            <input name='re_password' type='password' required />
          </label>
          <label>
            Email
            <input name='email' type='email' required />
          </label>
          <button type='submit'>Зарегистрироваться</button>
        </FormElem>
      </Layout>
    </>
  );
}

module.exports = RegPage;
