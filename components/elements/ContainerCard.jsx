const React = require('react');
const CardItem = require('./CardItem');

function ContainerCard({ cards,user, owner}) {
  return (
    <div className='container__cards'>
      {cards.map((card) => (
        <CardItem card={card} user={user} owner={owner} />
      ))}
    </div>
  );
}

module.exports = ContainerCard;
