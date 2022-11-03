const { Router } = require('express')

const platesRoutes = require('./plates.routes')
const usersRoutes = require('./users.routes')
const ordersRoutes = require('./orders.routes')
const ordersAdmRoutes = require('./orders.adm.routes')

const favoritesRoutes = require('./favorites.routes')
const sessionsRoutes = require('./sessions.routes')

const routes = Router()

routes.use('/plates', platesRoutes)
routes.use('/users', usersRoutes)
routes.use('/orders', ordersRoutes)
routes.use('/ordersAdm', ordersAdmRoutes)
routes.use('/favorites', favoritesRoutes)
routes.use('/sessions', sessionsRoutes)

module.exports = routes
