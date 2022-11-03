const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class OrdersController {
  async index(request, response) {
    const user_id = request.user.id

    const orders = await knex('orders').where({ user_id })

    return response.json(orders)
  }

  async create(request, response) {
    const user_id = request.user.id

    const { status, description } = request.body

    if (!status || !description) {
      throw new AppError(
        'Não foi possivel realizar o cadastro, por favor verifique suas informações'
      )
    }

    await knex('orders').insert({
      status,
      description,
      user_id
    })

    return response.send('Pedido feito com sucesso')
  }
}

module.exports = OrdersController
