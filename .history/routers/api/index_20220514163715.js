const express = require('express');
const router = express.Router();
const dbRoute = require('./user');

router.use('/user', dbRoute);

module.exports = router;