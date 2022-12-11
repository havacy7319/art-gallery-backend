const router = require('express').Router()

const usersRouter = require('./user.routes')
const itemsRouter = require('./item.routes')
const authRouter = require('./auth.routes')
const { authUser } = require('../utils') // Authenticated Route

router.use('/users', usersRouter)
router.use('/auth', authRouter)
router.use('/items', itemsRouter)



module.exports = router
