const express = require('express');
const router = express.Router();
const db = require('../../database')
const dbName = 'user'

router.get('/', function(req, res) {
    db.select('*').from(dbName).then(function(data) {
        res.status(200).json(data)
    }).catch((err) => {
        res.send(false)
    });
});

router.get('/:id', function(req, res) {
    let ID = { 'id': req.params.id }
    db.select('*').from(dbName).where(ID).then(function(data) {
        res.send(data)
    }).catch((err) => {
        res.send(false)
    });
});

router.post('/', async function(req, res) {
    await db.insert(req.body).into(dbName).returning('*').then((result) => {
        res.send(result)
        return result
    }).catch((err) => {
        res.send(false)
        return false
    });
})

router.patch('/:id', async function(req, res) {
    let ID = { 'id': req.params.id }
    await db.update(req.body).into(dbName).where('id', req.body.id)
    res.send(true)
})

router.delete('/:id', async function(req, res) {
    let ID = { 'id': req.params.id }
    await db(dbName).where(ID).del()
    res.send(true)
})



module.exports = router;
//http://localhost:3000/api/db