exports.up = knex =>
  knex.schema.alterTable('favorites', table => {
    table.integer('favoriteList')

    table.dropColumn('plate_id')
  })

exports.down = knex => knex.schema.dropTable('favorites')
