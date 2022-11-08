exports.up = knex =>
  knex.schema.createTable('favorites', table => {
    table.increments('id')
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')

    table
      .integer('plate_id')
      .references('id')
      .inTable('plates')
      .onDelete('CASCADE')
  })

exports.down = knex => knex.schema.dropTable('favorites')
