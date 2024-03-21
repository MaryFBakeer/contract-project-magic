const container = document.querySelector('.containerCards');

if (container) {
  container.addEventListener('submit', async (e) => {
    if (e.target.classList.contains('addOrder')) {
      const id = e.target.closest('.cardItem').dataset.id;

      try {
        const res = await fetch(`/api/basket/${id}`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ id }),
        });
        const data = await res.json();
        if (data.message == 'success') {
          //   e.target.closest('.card').remove();
        }
      } catch (error) {
        alert(error.message);
      }
    }
  });
}
