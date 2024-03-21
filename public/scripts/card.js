const formAddCard = document.querySelector('.formAdd-card');

if (formAddCard) {
  formAddCard.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { title, img, price } = event.target;
    const selectedDegree = document.querySelector('#selectDegree').value;

    if (
      title.value.trim() === '' ||
      img.value.trim() === '' ||
      price.value.trim() === ''
    ) {
      alert('Заполните все поля');
    } else {
      const data = {
        title: title.value,
        img: img.value,
        price: price.value,
        degree: selectedDegree,
      };
      const responce = await fetch('/api/card', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      const res = await responce.json();
      if (res.message === 'success') {
        formAddCard.reset();
        document.querySelector('.container__cards').insertAdjacentHTML('beforeend', res.html);
      }
    }
  });
}
