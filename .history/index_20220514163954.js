const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const apiRoute = require('./routers/api/index')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/api', apiRoute);



app.get('/', function(req, res) {
    res.send('Hello World s')
})

app.listen('3000')