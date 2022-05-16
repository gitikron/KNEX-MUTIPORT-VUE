const express = require('express')
const app = express()
import cors from "cors";
const bodyParser = require('body-parser')
const apiRoute = require('./routers/api/index')
require('dotenv').config()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//
app.use('/api', apiRoute);
app.use(cors());


app.get('/', function(req, res) {
    res.send('connected')
})

const PORT = process.env.PORT;
app.listen(PORT), () => { console.log('Node app is running on port', PORT) }