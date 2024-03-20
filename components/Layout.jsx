const React = require('react');
const Navbar = require('./elements/Navbar');

function Layout({ title, children, user }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        <link rel='stylesheet' href='/styles/normalize.css' />
        <link rel='stylesheet' href='/styles/Navbar.css' />
        <script defer src='/scripts/auth.js' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
