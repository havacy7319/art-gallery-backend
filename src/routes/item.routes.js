const router = require('express').Router()
const {publish, getAll} = require('../controllers/item.controller')


router.post('/publish', publish )

router.get('/', getAll)
router.get('/:id', getAll)


module.exports = router