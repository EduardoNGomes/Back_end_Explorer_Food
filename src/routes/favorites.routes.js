const { Router } = require('express')

const favoritesRoutes = Router()

const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const FavoritesController = require('../controllers/FavoritesController')

const favoritesController = new FavoritesController()

favoritesRoutes.use(ensureAuthenticated)

favoritesRoutes.post('/', favoritesController.addAndRemove)
favoritesRoutes.get('/', favoritesController.index)
favoritesRoutes.get('/:id', favoritesController.show)

module.exports = favoritesRoutes
