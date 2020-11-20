const express = require("express")
const cors = require('cors')
const dbConnection= require('./database/dbconnection')


require('dotenv').config()

const port=process.env.PORT||4000
const app= express()

//Middlewares
//app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//cors
app.use(cors())

//Base de datos
dbConnection()


//rutas
app.use("/peliculas",require("./routes/peliculas"))

if(process.env.NODE_ENV==='production')
{
    app.use(express.static('./client/build'))
}

app.listen(port,()=>{
    console.log("Server Running on port: ",port)
})