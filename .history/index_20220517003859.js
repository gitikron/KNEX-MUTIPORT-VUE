const express = require('express')
const app = express()
const cors = require("cors");
const bodyParser = require('body-parser')
const apiRoute = require('./routers/api/index')
require('dotenv').config()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const db = require('./database/index')


app.use('/api', apiRoute);
app.get('/api/user', userRoute) =>




    app.get('/', function(req, res) {
        res.send('connected')
    })

const PORT = process.env.PORT;
app.listen(PORT), () => { console.log('Node app is running on port', PORT) }