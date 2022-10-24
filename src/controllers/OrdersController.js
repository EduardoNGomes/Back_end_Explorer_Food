const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class OrdersController {
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

  async change(request, response) {
    const { id } = request.params
    const { status } = request.body

    if (
      status === 'pending' ||
      status === 'readying' ||
      status === 'delivered'
    ) {
      await knex('orders').where({ id }).update({ status })
    } else {
      throw new AppError('Informações inválidas')
    }

    return response.send('Pedido atualizado')
  }
}

module.exports = OrdersController
