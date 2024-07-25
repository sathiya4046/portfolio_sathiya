import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/users")

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    message:String
})
const userModel = mongoose.model("userdetails",userSchema)


app.post('/details',(req,res)=>{
    userModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})
app.listen(port,()=>console.log("port running"))