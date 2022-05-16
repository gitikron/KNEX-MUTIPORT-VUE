const express = require('express')
const app = express()
const cors = require("cors");
const bodyParser = require('body-parser')
require('dotenv').config()
const db = require('./database/index')
const dbName = 'user'

const api = require('./routers/api/index')
const user = require('./routers/api/user')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());




app.use('/api', api);
app.get('/api/user', user);

app.get('/', function(req, res) {
    res.send('connected')
})

app.get('/user', function(req, res) {
    db.select('*').from('user').then(function(data) {
        res.status(200).json(data)
    }).catch((err) => {
        res.send(false)
    });
})

const PORT = process.env.PORT;
app.listen(PORT), () => { console.log('Node app is running on port', PORT) }