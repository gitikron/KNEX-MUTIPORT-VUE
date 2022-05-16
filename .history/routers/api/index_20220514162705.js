const express = require('express');
const router = express.Router();
const dbRoute = require('./todo');

router.use('todo', dbRoute);

module.exports = router;