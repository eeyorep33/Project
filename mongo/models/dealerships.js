const mongoose = require('mongoose');
const Schema=mongoose.Schema

let dealer=new Schema({
      make: String,
      city: String,
      state: String,
      zip: String,
      street: String,
      reviews:[String]
  })
  const Dealer=mongoose.model('Dealer', dealer);

  module.exports=Dealer
  