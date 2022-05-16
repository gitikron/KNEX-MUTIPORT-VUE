const express = require('express')
const app = express()
const cors = require("cors");
const bodyParser = require('body-parser')
const apiRoute = require('./routers/api/index')
const userRoute = require('./routers/api/user')
require('dotenv').config()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/api', apiRoute);
app.use('/api/user', function(req, res) {

})




app.get('/', function(req, res) {
    res.send('connected')
})

const PORT = process.env.PORT;
app.listen(PORT), () => { console.log('Node app is running on port', PORT) }