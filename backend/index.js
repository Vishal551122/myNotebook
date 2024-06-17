const express=require('express')
const port=5000;
const app=express()
const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/mynotebook")


var cors=require('cors')
app.use(cors())


app.use(express.json())//middle ware
//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


 


app.listen(port,()=>{
    console.log(`myNotebook Server is listening at port ${port}`)
})