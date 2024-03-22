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

    const selectedItems = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked'),
    ).map((checkbox) => Number(checkbox.dataset.id));

    const basketItems = Array.from(
      document.querySelectorAll('input[type="checkbox"]'),
    ).map((checkbox) => Number(checkbox.dataset.id));

    try {
      const res = await fetch(`/api/basket/makeOrder`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ selectedItems, basketItems }),
      });

      const data = await res.json();
      if (data.message === 'success') {
        alert('Заказ оформлен!');

        if (selectedItems.length === basketItems.length) {
          const newOrderContainer = document.querySelector('.newOrder');
          newOrderContainer.innerHTML =
            '<p>Корзина</p><div>Корзина пуста</div>';
        } else {
          selectedItems.forEach((id) => {
            const item = document.querySelector(`input[data-id="${id}"]`);
            if (item) {
              item.parentElement.remove();
            }
          });
        }

        const completedOrdersContainer =
          document.querySelector('.completedOrders');
        const newOrderElement = document.createElement('div');
        newOrderElement.className = 'orders';
        newOrderElement.innerHTML = `<p>Заказ: ${data.orderId} в обработке...</p>`;
        completedOrdersContainer.appendChild(newOrderElement);
      } else if (data.message === 'empty') {
        alert('Выберите товары!');
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  });
}
