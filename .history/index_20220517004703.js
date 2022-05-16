const express = require('express')
const app = express()
const cors = require("cors");
const bodyParser = require('body-parser')
require('dotenv').config()


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

const PORT = process.env.PORT;
app.listen(PORT), () => { console.log('Node app is running on port', PORT) }