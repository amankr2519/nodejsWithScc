const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
  userName : String,
  userEmail :String,
  password : String, 
})

const userModel = mongoose.model("user",userSchema)


module.exports =  userModel