const { Router } = require('express')

const ordersAdmRoutes = Router()

const OrdersControllerAdm = require('../controllers/OrdersControllerAdm')
const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const ordersControllerAdm = new OrdersControllerAdm()

ordersAdmRoutes.use(ensureAuthenticated)

ordersAdmRoutes.get('/', ordersControllerAdm.show)
ordersAdmRoutes.put('/:id', ordersControllerAdm.change)

module.exports = ordersAdmRoutes
