const { Router } = require('express')

const platesRoutes = Router()

const PlatesController = require('../controllers/PlatesController')

const platesController = new PlatesController()

platesRoutes.post('/', platesController.create)

module.exports = platesRoutes
