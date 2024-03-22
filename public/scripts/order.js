const container = document.querySelector('.container__cards');
const form = document.querySelector('.makeOrder');

if (container) {
  container.addEventListener('click', async (e) => {
    if (e.target.classList.contains('addOrder')) {
      const id = e.target.closest('.cardItem').dataset.id;

      try {
        const res = await fetch(`/api/basket/add`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ id }),
        });
        const data = await res.json();
        if (data.message == 'success') {
          alert('Товар добавлен в заказ');
        }
      } catch (error) {
        alert(error.message);
      }
    }
  });
}

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => (obj[key] = value));

    try {
      const res = await fetch(`/api/basket/makeOrder`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(obj),
      });
      const data = await res.json();
      if (data.message == 'success') {
        alert('Заказ оформлен');
      }
    } catch (error) {
      alert(error.message);
    }
  });
}
