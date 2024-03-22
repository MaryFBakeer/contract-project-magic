const React = require('react');

function Navbar({ user }) {
  return (
    <nav>
      <div className='nav-wrapper'>
        <div id='nav-mobile'>
          <a href='/' class='sign'>
            <span class='fast-flicker'>M</span>a<span class='flicker'>gi</span>c
          </a>
          {/* <a href='/' className='logo'>
           
          </a> */}
          {user ? (
            <>
              <div className='navbar-user'>
                {/* <div className='userName'>Привет, {user.name}!</div> */}
                <div>
                  <a href='/account'>{user.name}</a>
                </div>
                <div className='basket'>
                  <a href='/basket'>Корзина</a>
                </div>
                <div>
                  <a href='/api/user/logout'>Выйти</a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='navbar-reg'>
                <div>
                  <a href='/user/login'>Авторизация</a>
                </div>
                <div>
                  <a href='/user/registration'>Регистрация</a>
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
