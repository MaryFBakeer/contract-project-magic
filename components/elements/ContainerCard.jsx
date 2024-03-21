const React = require('react');
const CardItem = require('./CardItem');

function ContainerCard({ cards,user }) {
  return (
    <div className='container__cards'>
      {cards.map((card) => (
        <CardItem card={card} user={user} />
      ))}
    </div>
  );
}

module.exports = ContainerCard;
