var express = require('express');
var router = express.router();

router.get('/', function(req, res) {
    res.send('api database')
})

//http://localhost:3000/api/db