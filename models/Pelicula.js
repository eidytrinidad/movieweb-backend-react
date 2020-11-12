const mongoose= require('mongoose')
const Schema = mongoose.Schema;

const peliculaSchema = new Schema(
  {
    seccion: {
      type: String,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
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

module.exports = mongoose.model("Pelicula", peliculaSchema);
