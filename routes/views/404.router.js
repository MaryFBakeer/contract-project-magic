const router = require('express').Router();
const err = require('../../components/elements/404')

router.get('/', (req, res) => {
    
    try {
        const user = res.locals.user
      res.send(
        res.renderComponent(err, { user})
      )
    } catch ({ message }) {
      res.status(200).json({ error: message });
    }
  });

  module.exports = router