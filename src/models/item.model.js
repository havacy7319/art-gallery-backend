const mongoose = require('mongoose')
const {Schema} = mongoose
const UserModel = require('./users.model')

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
        ref: UserModel,required:true,
        
    },
    //img:{data: Buffer, contenType: String}//
    img: {
        type: String, required: true,
    },
})

module.exports = mongoose.model('Item', ItemSchema )