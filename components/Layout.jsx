const React = require('react');
const Navbar = require('./elements/Navbar');

function Layout({ title, children, user }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        <link rel='stylesheet' href='/styles/normalize.css' />
        <link rel='stylesheet' href='/styles/Navbar.css' />
        <link rel='stylesheet' href='/styles/Card.css' />
        <link rel='stylesheet' href='/styles/Logo.css' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Rubik+Glitch+Pop&display=swap'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Rubik+Glitch+Pop&family=Underdog&display=swap'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=DotGothic16&family=Rubik+Glitch+Pop&family=Underdog&display=swap'
          rel='stylesheet'
        />
        <script src='/scripts/logReg.js' defer></script>
        <script src='/scripts/account.js' defer></script>
        <script src='/scripts/filterCity.js' defer></script>
        <script src='/scripts/order.js' defer></script>
        <script src='/scripts/card.js' defer></script>
      </head>
      <body>
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
