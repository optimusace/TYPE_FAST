require("dotenv").config()
const express = require("express")
const paragraphs = require("./paragraphs")

const app = express()

app.use(express.static("public"))
app.set("view engine","ejs")
app.set("views","./views")

app.get("/check",(req,res)=>{
    const randomIndex = Math.floor(Math.random() * paragraphs.length)
    const paragraph = paragraphs[randomIndex]
    res.render("typing",{data:paragraph})
})

app.listen(process.env.PORT,()=>{
    console.log("Server started on port : ",process.env.PORT)
})