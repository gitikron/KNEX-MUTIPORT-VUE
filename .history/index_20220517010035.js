const express = require('express')
const app = express()
const cors = require("cors");
const bodyParser = require('body-parser')
require('dotenv').config()
const db = require('./database/index')
const dbName = 'user'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.get('/', function(req, res) {
    res.send('DATABASE CONNECT')
})

app.get('/user', function(req, res) {
    db.select('*').from('user').then(function(data) {
        return res.status(200).json(data)
    }).catch((err) => {
        return res.send(err)
    });
})

app.get('/user/:id', function(req, res) {
    const ID = { 'id': req.params.id }
    db.select('*').from('user').where(ID).then(function(data) {
        return res.status(200).json(data)
    }).catch((err) => {
        return res.send(err)
    });
});

const PORT = process.env.PORT;
app.listen(PORT), () => { console.log('Node app is running on port', PORT) }