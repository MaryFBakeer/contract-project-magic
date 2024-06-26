const React = require('react');

function FormAddCard() {
  return (
    <form className='formAdd-card'>
      <input type='text' name='title' placeholder='Наименование' />
      <input type='text' name='img' placeholder='Фото карточки' />
      <input type='text' name='price' placeholder='Цена' />
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
