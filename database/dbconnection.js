const mongoose=require('mongoose')
const dbConnection=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex:true,
            useFindAndModify:false
        })
        console.log("Base de Datos Connetada")
    } catch (error) {
        console.log(error)
        throw new Error("Error al Cargar Base de Datos")
    }
}

module.exports=dbConnection