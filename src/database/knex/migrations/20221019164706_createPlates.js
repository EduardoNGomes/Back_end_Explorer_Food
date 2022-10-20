exports.up = knex =>
  knex.schema.createTable('plates', table => {
    table.increments('id')
    table.string('title')
    table.string('price')
    table.string('description')
    table.string('img')
    table.string('type')
  })

exports.down = knex => knex.schema.dropTable('plates')
