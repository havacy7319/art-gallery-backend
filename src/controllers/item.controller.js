const Item = require('../models/Item')

async function publicar (req, res){
    const {titulo, descripcion, precio, autor, img} = req.body
    
    const nuevo = new Item({titulo, descripcion, precio, autor, img})
    await nuevo.save()
    res.json(nuevo)
}

module.exports = {
    publicar,
}