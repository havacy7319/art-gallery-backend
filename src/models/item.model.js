const mongoose = require('mongoose')
const {Schema} = mongoose

const ItemSchema = new Schema({
    title: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    },
    price: {
        type:Number, required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',required:true,
        
    },
    img:{data: Buffer, contenType: String}

})

module.exports = mongoose.model('Item', ItemSchema )