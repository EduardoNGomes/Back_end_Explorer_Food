const { Router } = require('express')

const platesRoutes = require('./plates.routes')
const usersRoutes = require('./users.routes')
const ordersRoutes = require('./orders.routes')

const routes = Router()

routes.use('/plates', platesRoutes)
routes.use('/users', usersRoutes)
routes.use('/orders', ordersRoutes)

module.exports = routes
