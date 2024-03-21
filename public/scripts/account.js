const updateButton = document.querySelector('.update-account');
const formUpdateAc = document.querySelector('.formUpdate-account');

if (updateButton) {
  updateButton.addEventListener('click', async (event) => {
    const formUpdateAcc = document.querySelector('.formUpdate-account');
    if (!formUpdateAcc) {
      const responce = await fetch('/account/updateAc');
      const res = await responce.json();
      if (res.message === 'success') {
        let container = document.querySelector('.container_account');
        container.insertAdjacentHTML('beforeend', res.html);
        container.addEventListener('submit', async (event) => {
          event.preventDefault();
          const { name, login, email, city } = event.target;
          const { id } = event.target.dataset;
          if (
            login.value.trim() === '' ||
            email.value.trim() === '' ||
            city.value.trim() === ''
          ) {
            alert('Заполните все поля');
          } else {
            const data = {
              name: name.value,
              login: login.value,
              email: email.value,
              city: city.value,
            };
            const responce = await fetch(`/api/account/${id}/updateAc`, {
              method: 'PUT',
              headers: { 'Content-type': 'application/json' },
              body: JSON.stringify(data),
            });
            const res = await responce.json();
            if (res.message === 'success') {
              alert('Успешно изменено');
              window.location.assign('/account');
            }
          }
        });
      }
    }
  });
}
