const express = require('express');
const mysql = require('mysql');
const config = require('./config');
const app = express();

const connection = mysql.createConnection({
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPass,
    database: config.dbDatabase, 
})

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/gather', (req, res) => {

})

app.get('/display', (req, res) => {

})

app.listen(4200, () => {
  console.log('express is working')
})