const express = require('express');
const router = express.Router();
const db = require('../../database')

router.get('/', function(req, res) {
    db.select('*').from('user').then(function(data) {
        res.send(data)
    });
});

router.post('/', function(req, res) {
    db.insert(req.body).into('user').returning('*').then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(false)
    });
})

router.patch('/:id', function(req, res) {
    let ID = { 'id': req.params.id }
    db.update(req.body).into('user').where('id', req.body.id).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(false)
    });
})

// router.patch('/', function(req, res) {
//     db.update(req.body).into('user').where('id', req.body.id).then((result) => {
//         res.send(true)
//     }).catch((err) => {
//         res.send(false)
//     });
// })

router.delete('/:id', function(req, res) {
    let ID = { 'id': req.params.id }
    db('user').where(ID).del().returning('*').then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(false)
    });
})



module.exports = router;
//http://localhost:3000/api/db