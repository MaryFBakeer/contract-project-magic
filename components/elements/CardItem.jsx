const React = require('react');

function CardItem({ card, user }) {
  return (
    <div className='cardItem'>
      <p>{card.title}</p>
      <img src={card.img} alt='' />
      <p>{card.price} ₽</p>
      <p>{card.degree}</p>
      <p>Должен быть город</p>
      {user && user.id !== card.user_id && (
        <button className='addOrder'>Добавить</button>
      )}
    </div>
  );
}

module.exports = CardItem;
