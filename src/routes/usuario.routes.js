const router = require('express').Router()
const {registrar, acceder} = require('../controllers/usuario.controller')




router.post('/usuarios/registrar', registrar)

router.post('/usuarios/acceder', acceder)



module.exports = router

