const express = require('express');
const router = express.Router();
const db = require('../../database')

router.get('/', function(req, res) {
    db.select('*').from('user').then(function(data) {
        res.send(data)
    });
});

router.post('/', function(req, res) {
    db.insert(req.body).into('user').then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    });
})

module.exports = router;
//http://localhost:3000/api/db