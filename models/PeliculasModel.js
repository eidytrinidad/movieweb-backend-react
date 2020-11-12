const { Schema, model } = require("mongoose");

const peliculasSchema = Schema(
  {
    seccion: {
      type: String,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
      unique: true,
    },
    titulos: {
      type: String,
      required: true,
    },
    audio: {
      type: String,
      required: true,
    },
    descarga: {
      type: String,
    },
    online: {
      type: String,
    },
    director: {
      type: String,
      required: true,
    },
    elenco: {
      type: String,
      required: true,
    },
    genero: {
      type: String,
      required: true,
    },
    imagen: {
      type: String,
      required: true,
    },
    plot: {
      type: String,
      required: true,
    },
    puntuacion: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Pelicula", peliculasSchema);
