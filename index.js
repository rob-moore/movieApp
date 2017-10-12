const express = require('express');
const mysql = require('mysql');
const request = require('request');
const config = require('./config');
const app = express();

const connection = mysql.createConnection({
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPass,
    database: config.dbDatabase 
})
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/gather', (req, res) => {
  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=878&sort_by=popularity.desc&certification=R&primary_release_year=2015&api_key=${config.tmdbKey}`
  request(url, function (err, res, body) {
    console.log(body);
    if(err) {
      console.log(err)
      return false;
    }
  })
})

app.get('/display', (req, res) => {

})

app.listen(4200, () => {
  console.log('express is working')
})