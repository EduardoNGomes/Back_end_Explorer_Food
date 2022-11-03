const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class OrdersControllerAdm {
  async show(request, response) {
    const orders = await knex('orders')

    return response.json(orders)
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
        await knex('orders')
          .where({ id })
          .update({ status, update_at: knex.fn.now() })
      } else {
        throw new AppError('Informações inválidas')
      }
    } else {
      throw new AppError('Usuaro invalido', 401)
    }

    return response.send('Pedido atualizado')
  }
}

module.exports = OrdersControllerAdm
