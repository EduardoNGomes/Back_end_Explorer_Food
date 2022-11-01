const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class OrdersController {
  async show(request, response) {
    const user_id = request.user.id

    const orders = await knex('orders')

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

  async change(request, response) {
    const user_id = request.user.id
    const { id } = request.params
    const { status } = request.body

    const user = await knex('users').where({ id: user_id }).select().first()

    if (user.admin) {
      if (
        status === 'pending' ||
        status === 'readying' ||
        status === 'delivered'
      ) {
        await knex('orders').where({ id }).update({ status })
      } else {
        throw new AppError('Informações inválidas')
      }
    } else {
      throw new AppError('Usuaro invalido', 401)
    }

    return response.send('Pedido atualizado')
  }
}

module.exports = OrdersController
