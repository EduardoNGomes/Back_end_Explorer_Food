exports.up = knex =>
  knex.schema.createTable('orders', table => {
    table.increments('id')
    table.string('status')
    table.string('description')
    table.timestamps('updated_at')
  })

exports.down = knex => knex.schema.dropTable('orders')
