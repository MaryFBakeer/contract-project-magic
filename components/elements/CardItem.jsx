const React = require('react');

function CardItem({ card, user, owner }) {
  const ownerCard = owner.find(el => el.id === card.user_id)
  return (
    <div className='cardItem' data-id={card.id}>
      <div className='cardcss'>
        <img src={card.img} alt='' />
        <div className='infoCard'>
          <p className='titleC'>{card.title}</p>
          <p className='city'>{ownerCard.city}</p>
          <p className='degree'>{card.degree}</p>
          <p className='price'>{card.price} ₽</p>
        </div>
        {user && card.user_id === user.id && (
          <>
            <img
              className='btn-delete'
              style={{ width: '60px' }}
              src='https://icon-icons.com/icons2/1863/PNG/512/cancel-presentation_119315.png'
              alt='delete'
            />
            {/* <a href={`/card/${card.id}/update`}>
              <img
                className='btn-update'
                style={{ width: '30px', padding: '1px' }}
                src='https://icon-icons.com/icons2/1558/PNG/512/353430-checkbox-edit-pen-pencil_107516.png'
                alt='update'
              />
            </a> */}
          </>
        )}
        {user && user.id !== card.user_id && (
          <img
            className='addOrder'
            src='https://icon-icons.com/icons2/1336/PNG/512/picnicbasket_87270.png'
            style={{ width: '60px' }}
          />
        )}
      </div>
    </div>
  );
}

module.exports = CardItem;
