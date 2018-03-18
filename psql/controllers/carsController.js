const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Cars = bookshelf.Model.extend({
      tableName: 'cars',
      dealers: () => {
            return this.belongsTo(Dealers)
      }
})
exports.getCars = () => {
      return Cars.fetchAll()
            .then(result => {
                  const cars = result.models.map(car => {
                        return car.attributes
                  })
                  console.log(result)
                  return cars
            })
            .catch(err => {
                  console.log(err)
            })
}
//creates a new car
exports.createCar = (car) => {
      const newCar = new Cars(
            car)
      return newCar.save()
            .then(cars => {
                  return cars;
            })
            .catch(err => {
                  console.log(err)
            })
}
//finds a single car by id
exports.findCar = (key) => {
      return Cars.where(key)
            .fetch()
            .then(car => {
                  return car
            })
            .catch(err => {
                  console.log(err)
            })
}
//updates a single car
exports.updateCar = (key, update) => {
      const marker = key
      const fieldsToUpdate = update
      return new Cars(marker)
            .save(fieldsToUpdate)
            .then(saved => {
                  console.log(saved)
            })
            .catch(err => {
                  console.log(err)
            })
}
//finds all cars with a filter.  Can find all cars of a year or a dealer etc...
exports.findAllCars = (key) => {
      console.log(key)
      return Cars.where(key).fetchAll()
            .then(result => {
                  const dealers = result.models.map(dealer => {
                        return dealer.attributes
                  })
                  return dealers
            })
            .catch(err => {
                  console.log(err)
            })
}
//Deletes a single car
exports.deleteCar = (key) => {
      return new Cars(key)
            .destroy()
            .then(result => {
                  console.log(result)
            })
            .catch(err => {
                  console.log(err)
            })
}
//Gets all dealers