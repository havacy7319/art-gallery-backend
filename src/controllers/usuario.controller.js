const Usuario = require('../models/Usuario')

async function registrar (req, res){
    const {nombre, email, clave} = req.body
    
    const nuevo = new Usuario({nombre, email, clave})
    await nuevo.save()
    res.json(nuevo)
}

async function acceder (req, res){
    const {email, clave} = req.body
    const encontrado = await Usuario.findOne({email:email})
    if(encontrado && encontrado.clave === clave){
        res.json({mensaje: 'ok'})
    }
    else{
        res.json({mensaje: 'error'})
    }
    
}

module.exports = {
    registrar,
    acceder
}