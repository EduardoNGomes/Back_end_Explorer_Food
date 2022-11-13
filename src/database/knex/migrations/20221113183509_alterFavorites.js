exports.up = knex =>
  knex.schema.alterTable('favorites', table => {
    table.dropColumn('favoriteList')
  })

exports.down = knex => knex.schema.dropTable('favorites')
