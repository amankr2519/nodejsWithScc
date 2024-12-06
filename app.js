const express = require('express')
const morgan = require('morgan')
const app = express()
const userModel = require("./models/user")
const dbConnection = require("./config/db")
// 
const bodyParser = require('body-parser'); // Import body-parser

app.use(morgan("dev"))
app.set("view engine" , "ejs")

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
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


// app.post("/form-data",(req,res)=>{
//   console.log(req.body)
//   res.send('Data received')
// })

app.get("/register",(req,res)=>{
  res.render("register")
})

app.post("/register",async(req,res)=>{
  const {userName , userEmail, password}  = req.body
  const user = await userModel.create({
    userName :  userName,
    userEmail : userEmail,
    password : password,
  })
  
  res.send(user)
  
})


app.get("/get-user",(req,res)=>{
  userModel.findOne({userName : "b"}).then((users)=>{
    res.send(users)
  })
})


app.get("/user-update",async(req,res)=>{
  await userModel.findOneAndUpdate({
    userName : 'ram'
  },{
    userEmail : 'raam@gmail.com'
  })
  res.send("User updated")

})

app.get('/delete-user',async(req,res)=>{
  await userModel.findByIdAndDelete({
 
  userName : "ram "
  })
  res.send("user-deleted")
})
app.listen(3000)

