const React = require('react');

function Navbar({ user }) {
  return (
    <nav>
      <div class='nav-wrapper'>
        <div id='nav-mobile'>
          <a href='/' className='logo'>
            LOGO
          </a>
          {user ? (
            <>
              <div className='navbar-user'>
                <div className='userName'>Привет, {user.name}!</div>
                <div>
                  <a href='#'>Личный кабинет</a>
                </div>
                <div className='favorite'>
                  <a href='/favorites'>Избранное</a>
                </div>
                <div>
                  <a href='/api/auth/logout'>Выйти</a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='navbar-reg'>
                <div>
                  <a href='/auth/authorization'>Авторизация</a>
                </div>
                <div>
                  <a href='/auth/registration'>Регистрация</a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

module.exports = Navbar;
