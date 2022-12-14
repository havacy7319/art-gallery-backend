const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {dbName:process.env.MONGO_DB})
.then(db=>{
    console.log('[✔️] conexion con la base de datos')
})
.catch(err=>{
    console.log('[❌]conexion fallida')
})