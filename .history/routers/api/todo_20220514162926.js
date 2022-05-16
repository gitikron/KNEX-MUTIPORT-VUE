const express = require('express');
const router = express.Router();
const db = require('../../database')

router.get('/', function(req, res) {
    res.send('api todo')
})

module.exports = router;
//http://localhost:3000/api/db