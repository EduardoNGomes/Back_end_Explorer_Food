const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class OrdersController {
  async create(request, response) {
    const { user_id } = request.params

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
