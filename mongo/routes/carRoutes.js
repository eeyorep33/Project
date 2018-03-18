module.exports = (app) => {
      app.get('/cars', (req, res) => {
            Car.find({})
                  .then(objectsArray => {
                        res.send(objectsArray);
                  })
                  .catch(err => {
                        console.log(err);
                        res.status(400)
                              .json({ err });
                  })

      })
      app.get('/cars/:id', (req, res) => {
            Car.find({ "_id": req.params.id })
                  .then(object => {
                        res.send(object);
                  })
                  .catch(err => {
                        console.log(err);
                        res.status(400)
                              .json({ err });
                  })
      });

      app.post('/cars', (req, res) => {
            let object = req.body;
            let newObject = Car(object);
            newObject.save()
                  .then(savedObject => {
                        res.send('Car created!');
                  })
                  .catch(err => {
                        console.log(err);
                        res.status(400).json({ err })
                  })
      })
      app.put('/cars/:id', (req, res) => {
            let object = req.body;
            let update = {
                  make: object.make,
                  model: object.model,
                  year: object.year,
                  dealership_id: object.dealership_id
            }
            let query = { "_id": req.params.id }
            Car.findOneAndUpdate(query, update, { new: true, runValidators: true })
                  .then(updatedObject => {
                        res.send('Car updated');
                  })
                  .catch(err => {
                        console.log(err)
                        res.status(400).json({ err });
                  })
      });
      app.delete('/cars/:id', (req, res) => {
            Car.findOneAndRemove({ "_id": req.params.id })
                  .then(object => {
                        res.send("car deleted");
                  })
                  .catch(err => {
                        console.log(err);
                        res.status(400)
                              .json({ err });
                  })
      });
}