const express = require('express')

const app = express()

require('./src/database')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('port',3000)

app.use(require('./src/routes/usuario.routes'))
app.use(require('./src/routes/item.routes'))

app.listen(app.get('port'),()=>{
    console.log('[i] servidor encendido')
})

