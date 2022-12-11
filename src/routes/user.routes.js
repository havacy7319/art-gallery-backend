const router = require('express').Router()
const {getAllUsers} = require('../controllers/users.controller')
const {getUser} = require('../controllers/users.controller')
const { authUser } = require('../utils')



router.get('/', authUser, getAllUsers),
router.get('/:id', getUser)




module.exports = router

