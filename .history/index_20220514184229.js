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
app.use('/db/api', apiRoute);


app.get('/db', function(req, res) {
    res.send('Connected')
})

app.listen(process.env.PORT)