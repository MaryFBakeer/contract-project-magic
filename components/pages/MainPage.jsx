const React = require('react');
const Layout = require('../Layout');

function MainPage({ user }) {
  return (
    <Layout user = {user}>
      <div>Привет</div>
    </Layout>
  );
}

module.exports = MainPage;
