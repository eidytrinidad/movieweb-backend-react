const Peliculas = require("../models/PeliculasModel");

const crearPelicula = async (req, res, next) => {
  const pelicula = new Peliculas(req.body);

  try {
    await pelicula.save();
    return res.status(200).json({
      msg: "pelicula/serie guardada"
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Ya existe una pelicula con ese nombre",
    });
  }
};

const getPeliculas = async (req, res) => {
  try {
    const peliculas = await Peliculas.find();

    return res.status(200).json({
      ok: true,
      peliculas,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};


const getPelicula = async (req, res) => {

  const id = req.params.id
  console.log(id)
  try {

    const pelicula = await Peliculas.findById(id)

    if (pelicula === null) {
      return res.status(404).json({
        ok: false,
        msg: "No existe esa pelicula en nuestra base de datos"
      })
    }

    return res.status(200).json({
      ok: true,
      pelicula
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: error
    })
  }

}

const deletePelicula = async (req, res) => {

  const id = req.params.id

  try {

    const pelicula = await Peliculas.findByIdAndDelete(id)

    if (pelicula === null) {
      return res.status(404).json({
        ok: false,
        msg: "No existe esa pelicula en nuestra base de datos"
      })
    }

    return res.status(200).json({
      ok: true,
      msg: "Pelicula borrada con exito"
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: error
    })
  }

}

const updatePelicula = async (req, res) => {

  const id = req.params.id

  const body=req.body;

  try {

    const pelicula = await Peliculas.findByIdAndUpdate(id,body,{new:true})

    if (pelicula === null) {
      return res.status(404).json({
        ok: false,
        msg: "No existe esa pelicula en nuestra base de datos"
      })
    }

    return res.status(200).json({
      ok: true,
      pelicula
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })
  }

}



module.exports = {
  crearPelicula,
  getPeliculas,
  getPelicula,
  deletePelicula,
  updatePelicula
};