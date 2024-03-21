const React = require('react');

function CardItem({ card }) {
  return (
    <div className='cardItem' data-id={card.id}>
      <p>{card.title}</p>
      <img src={card.img} alt='' />
      <p>{card.price} ₽</p>
      <p>{card.degree}</p>
      <p>Должен быть город</p>
      <button className='addOrder'>Добавить</button>
    </div>
  );
}

module.exports = CardItem;
