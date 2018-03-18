const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const cars = require('../controllers/carsController')

      app.get('/cars', (req, res) => {
            cars.getCars().then((cars) => { res.send(cars) })
      })
      app.get('/cars/:id', (req, res) => {
            cars.findCar({ id: req.params.id }).then((cars) => { res.send(cars) })
      })
      app.get('/cars/all/:dealer_id', (req, res) => {
            cars.findAllCars({ dealer_id: req.params.dealer_id }).then((cars) => { res.send(cars) })
      })
      app.post('/cars', (req, res) => {
            cars.createCar(req.body).then((cars) => {
                  res.send("car created!")
            })
      })
      app.put('/cars', (req, res) => {
            cars.updateCar(req.body[0], req.body[1]).then(() => {
                  res.send("updated!")
            })
      })
      app.delete('/cars/:id', (req, res) => {
            cars.deleteCar(req.params.id).then(() => {
                  res.send("car deleted")
            })
      })
}