const router = require('express').Router();
const { User } = require('../../db/models');

router.get('/:id/updateAc', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, login, email, city } = req.body;
    const user = await User.update({ name, login, email, city }, { where: id });
    if (user[0]) {
      res.status(200).json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});
module.exports = router;
