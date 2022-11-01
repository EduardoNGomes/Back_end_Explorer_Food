const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class FavoritesController {
  async addAndRemove(request, response) {
    const user_id = request.user.id
    const { plate_id } = request.body

    const favorite = await knex('favorites').where({ plate_id })
    if (favorite.length === 1) {
      await knex('favorites').where({ plate_id }).delete()
    } else {
      await knex('favorites').insert({
        user_id,
        plate_id
      })
    }

    return response.json()
  }
  async index(request, response) {
    const user_id = request.user.id

    const plates = await knex('favorites').where({ user_id }).select()

    const allFavorites = plates.map(async favorite => {
      return await knex('plates').where({ id: favorite.plate_id })
    })

    Promise.all(allFavorites).then(value => {
      response.json(value.flat())
    })
  }

  async show(request, response) {
    const user_id = request.user.id
    const { id } = request.params

    const plate = await knex('favorites')
      .where({ user_id })
      .andWhere({ plate_id: id })

    return response.json(plate)
  }
}

module.exports = FavoritesController
