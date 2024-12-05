const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://0.0.0.0/person").then(()=>{
  console.log('Database connected')
})

module.exports = connection