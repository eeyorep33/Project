const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const dealers = require('../controllers/dealerController')

      app.get('/dealers', (req, res) => {
            dealers.getDealers().then((dealers) => { res.send(dealers) })
      })
      app.get('/dealers/:id', (req, res) => {
            dealers.findDealer({ id: req.params.id }).then((dealer) => { res.send(dealer) })
      })
      app.post('/dealers', (req, res) => {
            dealers.createDealer(req.body).then((dealer) => {
                  res.send("dealer created!")
            })
      })
      app.put('/dealers', (req, res) => {
            dealers.updateDealer(req.body[0], req.body[1]).then(() => {
                  res.send("updated!")
            })
      })
      app.delete('/dealers/:id', (req, res) => {
            dealers.deleteDealer(req.params.id).then(() => {
                  res.send("dealer deleted")
            })
      })
}