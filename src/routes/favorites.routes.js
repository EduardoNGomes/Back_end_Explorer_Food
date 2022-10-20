const { Router } = require('express')

const favoritesRoutes = Router()

const FavoritesController = require('../controllers/FavoritesController')

const favoritesController = new FavoritesController()

favoritesRoutes.post('/:user_id', favoritesController.addAndRemove)
favoritesRoutes.get('/:user_id', favoritesController.show)

module.exports = favoritesRoutes
