const express = require('express')
const morgan = require('morgan')
const app = express()
const userModel = require("./models/user")
const dbConnection = require("./config/db")

app.use(morgan("dev"))
app.set("view engine" , "ejs")

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(express.static("public"))
// middleware

// app.use((req,res,next)=>{
//   console.log("this is middleware")

//   const a = 2 
//   const b = 3
//   console.log(a+b)

//   return next()
  
// })

app.get("/",(req,res,next)=>{

  console.log("this is middleware")

  // const a = 2 
  // const b = 3
  // console.log(a+b)

  return next()
},(req,res)=>{
  // res.send("Home Page")
  res.render("index")
})

app.get("/about",(req,res)=>{
  res.send("About Page")
})

app.get("/profile",(req,res)=>{
  res.send("Profile Page")
})


app.post("/form-data",(req,res)=>{
  console.log(req.body)
  res.send('Data received')
})

app.listen(3000)

