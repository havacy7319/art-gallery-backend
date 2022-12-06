const mongoose = require('mongoose')
const {Schema} = mongoose

const ItemSchema = new Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    precio: {type:Number, required: true},
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',required:true,
        
    },
    img:{data: Buffer, contenType: String}

})

module.exports = mongoose.model('Item', ItemSchema )