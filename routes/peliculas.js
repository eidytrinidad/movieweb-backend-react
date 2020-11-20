const express=require('express')
const { crearPelicula, getPeliculas, getPelicula, deletePelicula, updatePelicula } = require('../controllers/peliculasController')
const route=express.Router()
const {check } = require('express-validator')
const { validarCampos }=require("../middlewares/validar-campos")

//Crear Pelicula
route.post("/nueva",[
    check("titulo", "El Titulo es Obligatorio").not().isEmpty(),
    check("titulos", "El Campo Titulos es Obligatorios").not().isEmpty(),
    check("elenco", "El Campo elenco es Obligatorio").not().isEmpty(),
    check("plot", "El plot es Obligatorio").not().isEmpty(),
    check("puntuacion", "El Campo puntuacion es Obligatorio").not().isEmpty(),
    check("seccion", "El Campo seccion es Obligatorio").not().isEmpty(),
    check("director", "El Campo director es Obligatorio").not().isEmpty(),
    check("audio", "El Campo audio es obligatorio").not().isEmpty(),
    check("genero", "El Campo genero es Obligatorio").not().isEmpty(),
    

    validarCampos
    ],
crearPelicula)

//Trae todas las peliculas
route.get("/",getPeliculas)

//Trae la pelicula por id
route.get("/:id",getPelicula)

//borrar la pelicula por id
route.delete("/delete/:id",deletePelicula)

//Actualisar la pelicula por id
route.put("/update/:id",[
    check("titulo", "El Titulo es Obligatorio").not().isEmpty(),
    check("titulos", "El Campo Titulos es Obligatorios").not().isEmpty(),
    check("elenco", "El Campo elenco es Obligatorio").not().isEmpty(),
    check("plot", "El plot es Obligatorio").not().isEmpty(),
    check("puntuacion", "El Campo puntuacion es Obligatorio").not().isEmpty(),
    check("seccion", "El Campo seccion es Obligatorio").not().isEmpty(),
    check("director", "El Campo director es Obligatorio").not().isEmpty(),
    check("audio", "El Campo audio es obligatorio").not().isEmpty(),
    check("genero", "El Campo genero es Obligatorio").not().isEmpty(),
    validarCampos
    ],
updatePelicula)

module.exports=route