const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/artgallery')
.then(db=>{
    console.log('[✔️] conexion con la base de datos')
})
.catch(err=>{
    console.log('[❌]conexion fallida')
})