const { Router } = require('express')

const platesRoutes = require('./plates.routes')

const routes = Router()

routes.use('/plates', platesRoutes)

module.exports = routes
