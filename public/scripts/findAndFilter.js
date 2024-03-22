const citySelect = document.querySelector('.cityFilter');
const findName = document.querySelector('.findName');

if (citySelect) {
  citySelect.addEventListener('change', async (e) => {
    const city = e.target.value;
    // const containerCards = document.querySelector('.container__cards')
    // console.log(containerCards);
    const res = await fetch('/api/filter/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ city }),
    });
    const data = await res.json();
    if (data.message === 'success') {
      document.querySelector('.container__cards').innerHTML = data.html;
    }
  });
}

if (findName) {
  findName.addEventListener('submit', (event) => {
    event.preventDefault()
})
  const form = document.querySelector('#title')
  form.addEventListener('input', (event) => {
    const value = event.target.value
    const cards = document.querySelectorAll('.titleC');
    if (value === '') {
      cards.forEach(card => {
        const parentDiv = card.closest('.cardItem')
        parentDiv.classList.remove('nonvisible')
      })
    }
    else {
      cards.forEach(card => {
        if (!(card.textContent
          .toLowerCase()
          .includes(value.toLowerCase()))) {
            const parentDiv = card.closest('.cardItem')
            if(!parentDiv.classList.contains('nonvisible')){
              parentDiv.classList.add('nonvisible')
            }
            return
          }
          else {
            const parentDiv = card.closest('.cardItem')
            parentDiv.classList.remove('nonvisible')
          }
      });
    }
  })
}