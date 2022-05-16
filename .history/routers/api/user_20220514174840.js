const express = require('express');
const router = express.Router();
const db = require('../../database')

router.get('/', function(req, res) {
    db.select('*').from('user').then(function(data) {
        res.send(data)
    }).catch((err) => {
        res.send(false)
    });
});

router.post('/', async function(req, res) {
    await db.insert(req.body).into('user').returning('*').then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(false)
    });
})

router.patch('/:id', async function(req, res) {
    let ID = { 'id': req.params.id }
    await db.update(req.body).into('user').where('id', req.body.id)
    res.send(true)
})

router.delete('/:id', async function(req, res) {
    let ID = { 'id': req.params.id }
    await db('user').where(ID).del()
    res.send(true)
})



module.exports = router;
//http://localhost:3000/api/db