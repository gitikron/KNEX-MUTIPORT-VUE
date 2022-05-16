const express = require('express');
const router = express.Router();
const dbRoute = require('./db');

router.use('db', dbRoute);

module.exports = router;