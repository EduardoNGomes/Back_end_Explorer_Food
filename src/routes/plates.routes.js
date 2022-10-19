const { Router } = require('express')

const platesRoutes = Router()

const PlatesController = require('../controllers/PlatesController')

const platesController = new PlatesController()

platesRoutes.get('/', platesController.show)
platesRoutes.get('/:id', platesController.index)
platesRoutes.post('/', platesController.create)
platesRoutes.delete('/:id', platesController.delete)

module.exports = platesRoutes
