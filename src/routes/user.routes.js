const router = require('express').Router()
const {getAllUsers} = require('../controllers/users.controller')
const {getUser, updateUser} = require('../controllers/users.controller')
const { authUser } = require('../utils')



router.get('/', authUser, getAllUsers),
router.get('/:id', getUser)
router.put('/:id', updateUser)




module.exports = router

