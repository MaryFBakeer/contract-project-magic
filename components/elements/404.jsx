const React = require('react');
const Layout = require('../Layout');

function err({ user }) {
  return (
    <Layout user={user}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          className='sign'
          style={{
            fontSize: '82px',
          }}
        >
          <span className='fast-flicker'>4</span>0
  
          <span className='flicker'>4</span>!<p>BRRRRRR</p>
        </div>
        <img
          style={{ width: '1000px' }}
          src='https://i.pinimg.com/originals/2a/83/01/2a8301417050b08ceeb7f37e879c81f3.gif'
        />
      </div>
    </Layout>
  );
}

module.exports = err;
