const router = require('express').Router();
const {User}= require('../../db/models')
const { Card } = require('../../db/models');
const CardItem = require('../../components/elements/CardItem');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
 destination: function(req, file, cb) {
    cb(null, 'public/img');
 },
 filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
 }
});

const upload = multer({ storage: storage });



router.post('/', upload.single('img'), async (req, res) => {
  try {
    const owner = await User.findAll()
    const { user } = res.locals;
    const { title, price, degree } = req.body;
    const img = `/img/${req.file.originalname}`
    const data = {
      title,
      img,
      price,
      degree,
      user_id: user.id,
    };
    console.log(data);

    const card = await Card.create(data);
    console.log(card);
    
    if (card) {
      const html = res.renderComponent(CardItem, { card, owner }, { doctype: false });
      console.log(html);
      res.status(201).json({ message: 'success', html });
      return;
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params, '<-----------------------');
    //IDOR
    const result = await Card.destroy({
      where: { id, user_id: res.locals.user.id },
    });

    if (result) {
      res.status(200).json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
