const mongoose = require('mongoose');
let { Schema } = mongoose


const searchSchema = Schema({
  id: String,
  location: String,
  searchTerm: String
})
module.exports = mongoose.model('searchTerm', searchSchema)
