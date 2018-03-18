const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const carRoute=require('./routes/carRoutes');
const dealerRoute=require('./routes/dealerRoutes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mongodata');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
//     const seedDealerships = require('./seeds/dealerships');
// const seedCars = require('./seeds/cars');
//  seedDealerships();
//  seedCars();
	console.log("Connected to db at /data/db/")
});

carRoute(app)
dealerRoute(app)

app.listen(8080, () => {
    console.log('SERVER RUNNING ON 8080');
})


