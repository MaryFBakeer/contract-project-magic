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
        if (data.message === 'success') {
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

    try {
      const res = await fetch(`/api/basket/makeOrder`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
      });

      const data = await res.json();
      if (data.message === 'success') {
        alert('Заказ оформлен!');

        const newOrderContainer = document.querySelector('.newOrder');
        newOrderContainer.innerHTML = '<p>Корзина</p><div>Корзина пуста</div>';

        const completedOrdersContainer =
          document.querySelector('.completedOrders');
        const newOrderElement = document.createElement('div');
        newOrderElement.className = 'orders';
        newOrderElement.innerHTML = `<p>Заказ: ${data.orderId} в обработке...</p>`;
        completedOrdersContainer.appendChild(newOrderElement);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  });
}

document.querySelectorAll('.removeItemButton').forEach((button) => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();

    const id = e.target.dataset.id;

    try {
      const res = await fetch(`/api/basket/removeItem/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      if (data.message === 'success') {
        alert('Товар удален из корзины');
        e.target.parentElement.remove();
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  });
});
