const express = require('express');
const app = express();
const request = require("request")
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});
app.get('/', (req, res) => {
    request
        .get("https://api.themoviedb.org/3/discover/movie?api_key=4880ee13ff8412dd62f76d64d54d162d&sort_by=popularity.desc", function (error, response, body) {
            let details = JSON.parse(body).results
            console.log(details)
            res.render('index', { movies: details });
        });
})
app.get('/movie/:id', (req, res) => {
    request
        .get("https://api.themoviedb.org/3/movie/" + req.params.id + "?api_key=4880ee13ff8412dd62f76d64d54d162d", function (error, response, body) {
            let details = JSON.parse(body)            
            res.render("movie", { movies: details });
        })
})

app.get("/search", (req, res) => {
    request
        .get("https://api.themoviedb.org/3/search/movie?api_key=4880ee13ff8412dd62f76d64d54d162d&query=" + req.query.searchTerm, function (error, response, body) {
            let details = JSON.parse(body).results
            res.render("index", { movies: details });
        })
})

