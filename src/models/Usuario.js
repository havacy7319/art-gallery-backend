const mongoose = require('mongoose')
const {Schema} = mongoose

const UsuarioSchema = new Schema({
    nombre: {type: String, required: true},
    email: {type:String, required: true},
    clave: {type:String, required: true},
    verificado: {type:Boolean, required: true, default:false},

})

module.exports = mongoose.model('Usuario', UsuarioSchema )