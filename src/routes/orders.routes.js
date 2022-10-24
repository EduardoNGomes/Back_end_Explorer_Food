const { Router } = require('express')

const ordersRoutes = Router()

const OrdersController = require('../controllers/OrdersController')
const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const ordersController = new OrdersController()

ordersRoutes.post('/', ensureAuthenticated, ordersController.create)
ordersRoutes.put('/:id', ordersController.change)

module.exports = ordersRoutes
