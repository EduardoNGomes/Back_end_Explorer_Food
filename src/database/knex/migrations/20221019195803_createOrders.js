exports.up = knex =>
  knex.schema.createTable('orders', table => {
    table.increments('id')
    table.string('status')
    table.string('description')
    table.timestamp('created_at').default(knex.fn.now())
    table.timestamp('update_at').default(knex.fn.now())
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
  })

exports.down = knex => knex.schema.dropTable('orders')
