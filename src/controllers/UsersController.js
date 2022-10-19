const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class UsersController {
  async create(request, response) {
    const { name, email, password, admin } = request.body

    if (!name || !email || password.length < 6) {
      throw new AppError(
        'Não foi possivel realizar o cadastro, por favor verifique suas informações'
      )
    }

    const userExists = await knex.select('email').where({ email }).from('users')

    if (userExists.length === 1) {
      throw new AppError('Este email já está em uso', 401)
    }
    await knex('users').insert({
      name,
      email,
      password,
      admin
    })

    return response.status(200).send('User created')
  }
}

module.exports = UsersController
