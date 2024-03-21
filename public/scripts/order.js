const container = document.querySelector('.container__cards');

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
