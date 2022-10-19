const { Router } = require('express')

const platesRoutes = require('./plates.routes')
const usersRoutes = require('./users.routes')

const routes = Router()

routes.use('/plates', platesRoutes)
routes.use('/users', usersRoutes)

module.exports = routes
