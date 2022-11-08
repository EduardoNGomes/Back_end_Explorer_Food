const { Router } = require('express')

const multer = require('multer')
const uploadConfig = require('../configs/upload')

const upload = multer(uploadConfig.MULTER)

const platesRoutes = Router()

const PlatesController = require('../controllers/PlatesController')

const platesController = new PlatesController()

platesRoutes.get('/', platesController.index)
platesRoutes.get('/:id', platesController.show)
platesRoutes.post('/', upload.single('img'), platesController.create)
platesRoutes.delete('/:id', platesController.delete)
platesRoutes.put('/:id', upload.single('img'), platesController.att)

module.exports = platesRoutes
