const express = require('express')

const app = express()


app.set("view engine" , "ejs")


// middleware

app.use((req,res,next)=>{
  console.log("this is middleware")

  const a = 2 
  const b = 3
  console.log(a+b)

  return next()
  
})

app.get("/",(req,res)=>{
  // res.send("Home Page")
  res.render("index")
})

app.get("/about",(req,res)=>{
  res.send("About Page")
})

app.get("/profile",(req,res)=>{
  res.send("Profile Page")
})

app.listen(3000)

