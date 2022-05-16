const express = require('express');
const router = express.Router();
const USER = require('./user');
const ADMIN = require('./admin');

router.use('/user', USER);
router.use('/admin', ADMIN);

module.exports = router;