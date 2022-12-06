const router = require('express').Router()
const {publicar, obtenerTodos} = require('../controllers/item.controller')


router.post('/items/publicar', publicar )

router.get('/items', obtenerTodos)


module.exports = router