const { Router } = require('express')

const ordersRoutes = Router()

const OrdersController = require('../controllers/OrdersController')
const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const ordersController = new OrdersController()

ordersRoutes.use(ensureAuthenticated)

ordersRoutes.get('/', ordersController.index)
ordersRoutes.post('/', ordersController.create)

module.exports = ordersRoutes
