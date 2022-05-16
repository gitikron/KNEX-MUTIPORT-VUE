const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const apiRoute = require('./routers/api/index')
require('dotenv').config()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//
app.use('/api', apiRoute);


app.get('/', function(req, res) {
    res.send('Connected')
})

const PORT = process.env.PORT;
app.listen('PORT')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));