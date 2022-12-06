const Item = require('../models/Item')

async function publicar (req, res){
    const {titulo, descripcion, precio, autor, img} = req.body
    
    const nuevo = new Item({titulo, descripcion, precio, autor, img})
    await nuevo.save()
    res.json(nuevo)
}

async function obtenerTodos(req,res){
    const items = await Item.find()
    res.json(items)
}
module.exports = {
    publicar,
    obtenerTodos,
    
}