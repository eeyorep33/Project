module.exports = (app) => {
      const Dealership = require('../models/dealerships');
      app.get('/dealers', (req, res) => {
            Dealership.find({})
                  .then(objectsArray => {
                        res.send(objectsArray);
                  })
                  .catch(err => {
                        console.log(err);
                        res.status(400)
                              .json({ err });
                  })
      })
      app.get('/dealers/:ObjectId', (req, res) => {
            console.log(req.params.ObjectId)
            Dealership.find({ "_id": req.params.ObjectId })
                  .then(object => {
                        res.send(object);
                  })
                  .catch(err => {
                        console.log(err);
                        res.status(400)
                              .json({ err });
                  })
      });
      app.post('/dealers', (req, res) => {
            let object = req.body;
            let newObject = Dealership(object);
            newObject.save()
                  .then(savedObject => {
                        res.send("Dealer created!");
                  })
                  .catch(err => {
                        console.log(err);
                        res.status(400).json({ err })
                  })
      })
      app.put('/dealers/:id', (req, res) => {
            let __object = req.body;
            let update = {
                  make: __object.make,
                  city: __object.city,
                  state: __object.state,
                  zip: __object.zip,
                  street: __object.street,
                  reviews: __object.reviews
            }
            let query = { "_id": req.params.id }
            Dealership.findOneAndUpdate(query, update, { new: true, runValidators: true })
                  .then(updatedObject => {
                        res.send('Dealer updated');
                  })
                  .catch(err => {
                        console.log(err)
                        res.status(400).json({ err });
                  })

      });
      app.delete('/dealers/:id', (req, res) => {
            Dealership.findOneAndRemove({ "_id": req.params.id })
                  .then(object => {
                        res.send({ deleted: true });
                  })
                  .catch(err => {
                        console.log(err);
                        res.status(400)
                              .json({ err });
                  })
      });
}