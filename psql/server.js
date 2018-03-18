const express = require('express')
app = express()
const bodyparser = require('body-parser')
const knexConfig = require('./knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const car = require('./routes/carRoutes')
const dealer = require('./routes/dealerRoutes')
app.use(bodyparser.json());
app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "GET, PUT, POST,DELETE, OPTIONS")
      next();
});

app.listen(8080, () => {
      console.log('Server Started on http://localhost:8080');
      console.log('Press CTRL + C to stop server');
});
dealer(app)
car(app)







