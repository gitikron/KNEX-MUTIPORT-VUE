const express = require('express');
const router = express.Router();
const db = require('../../database')

router.get('/', function(req, res) {
    db.select('*').from('user');
})

module.exports = router;
//http://localhost:3000/api/db