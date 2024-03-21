const router = require('express').Router();
const {User, Card} = require('../../db/models')
const Container = require('../../components/elements/ContainerCard')

router.post('/', async (req, res) => {
    
    let users;
    try {
      const { city } = req.body;
      console.log(city, 'Все города');
      if (city === 'Все города') {
          users = await User.findAll();  
        }
        else {users = await User.findAll({ where: {city} });}
        console.log(users);
        if (users) {
            const cards = (await Promise.all(users.map((el) => Card.findAll({where: {user_id: el.id}})))).flat()
            const html = res.renderComponent(Container, {cards}, {doctype: false})
        res.status(200).json({ message: 'success', html });
      }
      
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
})


module.exports = router