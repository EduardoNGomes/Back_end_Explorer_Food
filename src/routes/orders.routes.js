const { Router } = require('express')

const ordersRoutes = Router()

const OrdersController = require('../controllers/OrdersController')

const ordersController = new OrdersController()

ordersRoutes.post('/:user_id', ordersController.create)

module.exports = ordersRoutes
