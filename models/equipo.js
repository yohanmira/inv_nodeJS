const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equiposSchema = new Schema({
    nombre: String,
    descripcion: String

})

//crear modelo
const equipos = mongoose.model('Equipo', equiposSchema);

module.exports = equipos;