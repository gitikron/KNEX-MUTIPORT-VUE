const express = require('express')
const app = express()
const apiRoute = require('./routers/api/index')
app.use('/api', )



app.get('/', function(req, res) {
    res.send('Hello World s')
})

app.listen('3000')