var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('api todo')
})

module.exports = router;
//http://localhost:3000/api/db