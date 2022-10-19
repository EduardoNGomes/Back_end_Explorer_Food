const knex = require('../database/knex')

class UsersController {
  async create(request, response) {
    const { name, email, password, admin } = request.body

    if (!name || !email || password.length < 6) {
      throw new Error('Informacoes invalidas')
    }

    try {
      await knex('users').insert({
        name,
        email,
        password,
        admin
      })
    } catch (error) {
      response.status(400).send(error)
    }

    return response.status(200).send('User created')
  }
}

module.exports = UsersController
