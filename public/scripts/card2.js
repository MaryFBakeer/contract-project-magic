const formAddCard = document.querySelector('.formAdd-card');
const containerCard = document.querySelector('.container__cards');

if (formAddCard) {
  formAddCard.addEventListener('submit', async (event) => {
    event.preventDefault();

    // const { title, img, price } = event.target;
    const selectedDegree = document.querySelector('#selectDegree').value;
    const { title, img, price } = event.target;
    
    
    
    if (
      title.value.trim() === '' ||
      img.value.trim() === '' ||
      price.value.trim() === ''
    ) {
      alert('Заполните все поля');
    } else {
      // const data = {
      //   title: title.value,
      //   img: img.value,
      //   price: price.value,
      //   degree: selectedDegree,
      // };
      
      const formData = new FormData();

      formData.append('title', title.value)
      formData.append('img', img.files[0])
      formData.append('price', price.value)
      formData.append('degree', selectedDegree)

      const responce = await fetch('/api/card', {
        method: 'POST',
        body: formData
      });
      const res = await responce.json();
      
      if (res.message === 'success') {
        formAddCard.reset();
        let k = document.querySelector('.container__cards');
        let f = k.insertAdjacentHTML('beforeend', res.html);
        // document.querySelector('.container__cards').insertAdjacentHTML('beforeend', res.html);
      }
    }
  });
}

console.log(containerCard);
if (containerCard) {
  containerCard.addEventListener('click', async (event) => {
    if (event.target.classList.contains('btn-delete')) {
      const card = event.target.closest('.cardItem');
      const { id } = card.dataset;
      const responce = await fetch(`/api/card/${id}`, { method: 'DELETE' });
      const res = await responce.json();
      if (res.message === 'success') {
        alert('Успешно удалено');
        card.remove();
      }
    }
  });
}
