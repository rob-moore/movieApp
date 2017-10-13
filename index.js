const express = require('express');
const mysql = require('mysql');
const request = require('request');
const serveStatic = require('serve-static');
const config = require('./config');
const app = express();

const connection = mysql.createConnection({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPass,
  database: config.dbDatabase
})

app.use(serveStatic('app'));

connection.connect();

const insertMovies = url => {
  request(url, function (err, res, body) {
    if (err) {
      console.log(err)
      return false;
    }
    const movieData = JSON.parse(res.body);


    movieData.results.forEach(element => {
      let post = {
        id: element.id,
        adult: element.adult,
        backdrop_path: element.backdrop_path,
        genre_ids: JSON.stringify(element.genre_ids),
        original_language: element.original_language,
        original_title: element.original_title,
        overview: element.overview,
        popularity: element.popularity,
        poster_path: element.poster_path,
        release_date: element.release_date,
        title: element.title,
        video: element.video,
        vote_average: element.vote_average,
        vote_count: element.vote_count,
      };
      connection.query('INSERT INTO movies SET ?', post, (error, results, fields) => {
        if (error) {
          console.error(error)
        }
      })
    }, this);

  })
}

// Define gather endpoint
app.get('/gather', (req, resp) => {
  // Ensure data is fresh
  connection.query('TRUNCATE movies')

  // Gets 100 results 
  for (let i = 1; i <= 5; i++) {
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=878&sort_by=popularity.desc&certification=R&primary_release_year=2015&page=${i}&api_key=${config.tmdbKey}`
    insertMovies(url);
  }
  resp.send('we did the thing')

})

app.get('/movies', (req, resp) => {
  connection.query('SELECT * FROM movies ORDER BY vote_count desc LIMIT 20', (error, results, fields) => {
    if (error) {
      console.error(error);
      resp.send('error dood')
    }
    console.log(results);
    resp.send(results);
  });

})



app.listen(4200, () => {
  console.log('express is working')
})