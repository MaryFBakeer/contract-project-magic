const router = require('express').Router();

//views
const mainViewRouter = require('./views/main.view.router');
const logRegViewRouter = require('./views/logreg.view.router');
const logRegApiRouter = require('./api/logreg.api.router');

//api
router.use('/api/user', logRegApiRouter);

//router views
router.use('/', mainViewRouter);
router.use('/user', logRegViewRouter);

// route api

module.exports = router;