const mongoose = require('mongoose');
const Schema=mongoose.Schema

let cars= new Schema({
      make: String,
      model: String,
      year: Number,
      dealership_id: Schema.Types.ObjectId
  })
  let Cars=mongoose.model('Cars', cars)

  module.exports= Cars