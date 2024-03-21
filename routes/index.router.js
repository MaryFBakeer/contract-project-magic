const router = require('express').Router();

//views
const mainViewRouter = require('./views/main.view.router');
const logRegViewRouter = require('./views/logreg.view.router');
const basketViewRouter = require('./views/basket.view.router');
const logRegApiRouter = require('./api/logreg.api.router');
const basketApiRouter = require('./api/basket.api.router');

//api
router.use('/api/user', logRegApiRouter);
router.use('/api/basket', basketApiRouter);

//router views
router.use('/', mainViewRouter);
router.use('/user', logRegViewRouter);
router.use('/basket', basketViewRouter);

// route api

module.exports = router;
