const React = require('react');

function FormAddCard() {
  return (
    <form className='formAdd-card'>
      <input type='text' name='title' placeholder='title' />
      <input type='text' name='img' placeholder='img' />
      <input type='text' name='price' placeholder='price' />
      <select name='degree' id='selectDegree'>
        <option hidden>Cтепень изношенности</option>
        <option value='Новая'>Новый</option>
        <option value='Б/у'>Б/у</option>
      </select>
      <button className='btn-add-card'>Добавить</button>
    </form>
  );
}

module.exports = FormAddCard;
