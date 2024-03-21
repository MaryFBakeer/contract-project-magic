const React = require('react');

function FormAddCard() {
  return (
    <form className='formAddCard'>
      <input type='text' name='title' placeholder='title' />
      <input type='text' name='img' placeholder='img' />
      <input type='text' name='price' placeholder='price' />
      <input type='text' name='degree' placeholder='degree' />
    </form>
  );
}

module.exports = FormAddCard;