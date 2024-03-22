const React = require('react');

function Navbar({ user }) {
  return (
    <nav>
      <div className='nav-wrapper'>
        <div id='nav-mobile'>
          <a href='/' class='sign'>
            <span class='fast-flicker'>M</span>a<span class='flicker'>gi</span>c
          </a>
          {user ? (
            <>
              <div className='navbar-user'>
                {/* <div className='userName'>Привет, {user.name}!</div> */}
                <div>
                  <a href='/account'>
                    <img
                      src='https://icon-icons.com/icons2/4182/PNG/512/avatar_person_people_character_user_metaverse_metapeople_profile_picture_global_punk_man_long_shirt_fashion_mohawk_hairstyle_hair_icon_262225.png'
                      style={{ width: '100px' }} alt ='rs'
                    />
                  </a>
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
