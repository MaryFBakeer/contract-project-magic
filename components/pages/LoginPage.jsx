const React = require('react');
const Layout = require('../Layout');
const FormElem = require('../elements/FormElem');

function LoginPage({ title }) {
  return (
    <>
      <Layout title={title}>
        <FormElem classForm={'login'}>
          <button type='submit'>Войти</button>
        </FormElem>
      </Layout>
    </>
  );
}

module.exports = LoginPage;
