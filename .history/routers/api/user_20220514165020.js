const express = require('express');
const router = express.Router();
const db = require('../../database')

router.get('/', function(req, res) {
    db.select('*').from('user').then(function(data) {
        res.send(data)
    });
});

router.post('/', function(req, res) {
    db.insert().returning('*').into('user').then(function(data) {
        res.send(data)
    })
})

//userTokenid, Profilename, displayImg, fullName, form

module.exports = router;
//http://localhost:3000/api/db