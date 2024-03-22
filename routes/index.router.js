const router = require('express').Router();

//views
const mainViewRouter = require('./views/main.view.router');
const logRegViewRouter = require('./views/logreg.view.router');
const logRegApiRouter = require('./api/logreg.api.router');
const accountApiRouter = require('./api/account.api.router');
const filterApiRouter = require('./api/filterCity.api.router');
const cardApiRouter = require('./api/card.api.router2');
const basketViewRouter = require('./views/basket.view.router');
const basketApiRouter = require('./api/basket.api.router');
const erRouter = require('./views/404.router');


//api
router.use('/api/user', logRegApiRouter);
router.use('/api/basket', basketApiRouter);
router.use('/api/account', accountApiRouter);
router.use('/api/filter', filterApiRouter);
router.use('/api/card', cardApiRouter);

//router views
router.use('/', mainViewRouter);
router.use('/user', logRegViewRouter);
router.use('/basket', basketViewRouter);
router.use('/*', erRouter);

// route api

module.exports = router;
