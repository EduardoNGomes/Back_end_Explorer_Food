exports.up = knex =>
  knex.schema.createTable('dessert', table => {
    table.increments('id')
    table.string('title')
    table.string('price')
    table.string('description')
    table.string('img')
    table.integer('user_id').references('id').inTable('users')
  })

exports.down = knex => knex.schema.dropTable('dessert')
