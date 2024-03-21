const reg = document.querySelector('.registration');
const log = document.querySelector('.login');

if (log) {
  log.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { login, password } = event.target;

    try {
      const res = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ login: login.value, password: password.value }),
      });

      const data = await res.json();

      if (data.message == 'success') {
        window.location.assign('/');
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  });
}

if (reg) {
  reg.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { login, email, password, re_password } = event.target;

    try {
      const res = await fetch('/api/user/registration', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          login: login.value,
          email: email.value,
          password: password.value,
          re_password: re_password.value,
        }),
      });

      const data = await res.json();

      if (data.message === 'success') {
        alert('Регистрация прошла успешно!');
        window.location.assign('/');
      } else if (data.message === 'user') {
        alert('Пользователь уже существует!');
      } else if (data.message === 'password') {
        alert('Пароли не совпадают!');
      } else if (data.message === 'inputs') {
        alert('Заполните все поля корректно!');
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  });
}
