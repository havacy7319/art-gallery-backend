const Item = require('../models/item.model')
const userModel = require('../models/users.model')

async function publish (req, res){
    const {title, description, price, author, img} = req.body
    
    const nuevo = new Item({title, description, price, author, img})
    await nuevo.save()
    res.json(nuevo)
}

async function getAll(req,res){
    const items = await Item.find().populate('author')

    res.json(items)
}
module.exports = {
    publish,
    getAll,
    
}