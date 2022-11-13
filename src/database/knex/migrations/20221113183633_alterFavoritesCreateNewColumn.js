exports.up = knex =>
  knex.schema.alterTable('favorites', table => {
    table.string('favoriteList')
  })

exports.down = knex => knex.schema.dropTable('favorites')
