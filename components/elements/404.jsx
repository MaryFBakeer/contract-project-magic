const React = require('react');
const Layout = require('../Layout')

function err({user}) {
  return (
    <Layout>
<div style={{display: 'flex', justifyContent: 'center'}}>
        404
    </div>
    </Layout>
    
  );
}

module.exports = err;
