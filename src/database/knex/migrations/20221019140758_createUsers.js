exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('name')
    table.string('email')
    table.string('password')
    table.boolean('admin')
  })

exports.down = knex => knex.schema.dropTable('users')
