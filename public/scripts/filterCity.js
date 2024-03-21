const citySelect = document.querySelector('.cityFilter')

if (citySelect){
    citySelect.addEventListener('change', async (e) => {
    const city = e.target.value
    // const containerCards = document.querySelector('.container__cards')
    // console.log(containerCards);
    const res = await fetch('/api/filter/', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({city})
    })
    const data = await res.json()
    if (data.message === 'success'){
        document.querySelector('.container__cards').innerHTML=data.html
    }
    

    })
}