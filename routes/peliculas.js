const express=require('express')
const { crearPelicula, getPeliculas, getPelicula, deletePelicula, updatePelicula } = require('../controllers/peliculasController')
const route=express.Router()

//Crear Pelicula
route.post("/nueva",crearPelicula)

//Trae todas las peliculas
route.get("/",getPeliculas)

//Trae la pelicula por id
route.get("/:id",getPelicula)

//borrar la pelicula por id
route.delete("/:id",deletePelicula)

//Actualisar la pelicula por id
route.put("/:id",updatePelicula)

module.exports=route