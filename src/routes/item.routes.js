const router = require('express').Router()
const {publicar} = require('../controllers/item.controller')


router.post('/items/publicar', publicar )


module.exports = router