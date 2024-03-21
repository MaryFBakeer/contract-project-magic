const router = require('express').Router();

//views
const mainViewRouter = require('./views/main.view.router');
const logRegViewRouter = require('./views/logreg.view.router');
const logRegApiRouter = require('./api/logreg.api.router');
const accountApiRouter = require('./api/account.api.router');
const filterApiRouter = require('./api/filterCity.api.router');

//api
router.use('/api/user', logRegApiRouter);
router.use('/api/account', accountApiRouter);
router.use('/api/filter', filterApiRouter);

//router views
router.use('/', mainViewRouter);
router.use('/user', logRegViewRouter);

// route api

module.exports = router;
