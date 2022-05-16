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
        res.send(true)
    }).catch((err) => {
        res.send(false)
    });
})

router.patch('/', function(req, res) {
    db.update(req.body).into('user').where('id', req.body.id).then((result) => {
        res.send(true)
    }).catch((err) => {
        res.send(false)
    });
})

router.delete('/', function(req, res) {
    db('user').where(`id:${req.body.id}`).del().then((result) => {
        res.send(true)
    }).catch((err) => {
        res.send(false)
    });
})



module.exports = router;
//http://localhost:3000/api/db