const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Dealers = bookshelf.Model.extend({
      tableName: 'dealers',
      cars: () => {
            return this.hasMany('cars')
      }
})
exports.getDealers = () => {
      return Dealers.fetchAll()
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
//Creates a new dealer
exports.createDealer = (dealer) => {
      const newDealer = new Dealers(
            dealer
      )
      return newDealer.save()
            .then(dealers => {
                  return dealers;
            })
            .catch(err => {
                  console.log(err)
            })
}
//finds a single dealer by id
exports.findDealer = (key) => {
      return Dealers.where(key)
            .fetch()
            .then(dealer => {
                  return dealer
            })
            .catch(err => {
                  console.log(err)
            })
}
//updates a single dealer
exports.updateDealer = (key, update) => {
      const marker = key
      const fieldsToUpdate = update
      return new Dealers(marker)
            .save(fieldsToUpdate)
            .then(saved => {
                  console.log(saved)
            })
            .catch(err => {
                  console.log(err)
            })
}
//finds all dealers with a filter.  Can find all dealers in a certain city etc...
exports.findAll = (key) => {
      return Dealers.where(key).fetchAll()
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
//deletes a single dealer
exports.deleteDealer = (key) => {
      console.log(key)
      return new Dealers(key)
            .destroy()
            .then(result => {
                  console.log(result)
            })
            .catch(err => {
                  console.log(err)
            })
}