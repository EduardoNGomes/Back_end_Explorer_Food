exports.up = knex =>
  knex.schema.createTable('ingredients', table => {
    table.increments('id')
    table.string('title')
    table.string('img')

    table
      .integer('plate_id')
      .references('id')
      .inTable('plates')
      .onDelete('CASCADE')
  })

exports.down = function (knex) {}
