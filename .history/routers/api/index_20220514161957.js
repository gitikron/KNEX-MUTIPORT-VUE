const express = require('express');
const router = express.router();
const dbRoute = require('./db')

router.use('db', dbRoute)