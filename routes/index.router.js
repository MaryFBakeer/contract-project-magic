const router = require('express').Router();

//views
const mainViewRouter = require('./views/main.view.router');

//api

//router views
router.use('/', mainViewRouter);

// route api

module.exports = router;
