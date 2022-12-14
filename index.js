const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()



require('./src/database')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('port', process.env.PORT)

/*app.use(require('./src/routes/user.routes'))
app.use(require('./src/routes/item.routes'))
app.use(require('./src/routes/auth.routes'))*/

app.use('/api', require('./src/routes/index'))

app.listen(app.get('port'),()=>{
    console.log('[i] servidor encendido')
})

