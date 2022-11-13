const { Router } = require('express')

const favoritesRoutes = Router()

const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const FavoritesController = require('../controllers/FavoritesController')

const favoritesController = new FavoritesController()

favoritesRoutes.use(ensureAuthenticated)

favoritesRoutes.post('/', favoritesController.create)
favoritesRoutes.put('/', favoritesController.update)
favoritesRoutes.get('/', favoritesController.show)

module.exports = favoritesRoutes
