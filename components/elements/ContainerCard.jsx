const React = require('react');
const CardItem = require('./CardItem');

function ContainerCard({ cards}) {
  return (
    <div className='containerCards'>
      {cards.map((card) => (
        <CardItem card={card} />
      ))}
    </div>
  );
}

module.exports = ContainerCard;
