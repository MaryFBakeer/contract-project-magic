const router = require('express').Router();

//views
const mainViewRouter = require('./views/main.view.router');
const logRegViewRouter = require('./views/logreg.view.router');
const logRegApiRouter = require('./api/logreg.api.router');
<<<<<<< HEAD
const accountApiRouter = require('./api/account.api.router');
const cardApiRouter = require('./api/card.api.router');

//api
router.use('/api/user', logRegApiRouter);
router.use('/api/account', accountApiRouter);
router.use('/api/card', cardApiRouter);
=======
const basketViewRouter = require('./views/basket.view.router');

//api
router.use('/api/user', logRegApiRouter);
>>>>>>> 5d9f48fb2fdee36b35e8a2086b5d4864504255c4

//router views
router.use('/', mainViewRouter);
router.use('/user', logRegViewRouter);
router.use('/basket', basketViewRouter);

// route api

module.exports = router;
