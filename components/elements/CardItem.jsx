const React = require('react');

function CardItem({ card, user }) {
  return (
    <div className='cardItem' data-id={card.id}>
      {user && card.user_id === user.id && (
        <>
          <img
            className='btn-delete'
            style={{ width: '25px', padding: '1px' }}
            src='https://icon-icons.com/icons2/37/PNG/512/delete_4219.png'
            alt='delete'
          />
          <a href={`/card/${card.id}/update`}>
            <img
              className='btn-update'
              style={{ width: '30px', padding: '1px' }}
              src='https://icon-icons.com/icons2/1558/PNG/512/353430-checkbox-edit-pen-pencil_107516.png'
              alt='update'
            />
          </a>
        </>
      )}
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
