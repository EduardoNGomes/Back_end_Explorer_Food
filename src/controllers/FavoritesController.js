const knex = require('../database/knex')

class FavoritesController {
  async create(request, response) {
    const user_id = request.user.id
    const { favoriteList } = request.body

    const favorite = await knex('favorites').insert({
      user_id,
      favoriteList
    })

    return response.json()
  }
  async update(request, response) {
    const user_id = request.user.id
    const { favoriteList } = request.body

    await knex('favorites').where({ user_id }).update({
      favoriteList
    })
  }

  async show(request, response) {
    const user_id = request.user.id

    const favorite = await knex('favorites').where({ user_id }).first()

    response.json(favorite)
  }
}

module.exports = FavoritesController
