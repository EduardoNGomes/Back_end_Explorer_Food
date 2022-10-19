const path = require('path')

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.db')
    },
    pool: {
      // Enable cascade delete functionality
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb)
    },
    // Localization of migrations
    migrations: {
      directory: path.resolve(
        __dirname,
        'src',
        'database',
        'knex',
        'migrations'
      )
    },
    useNullAsDefault: true
  }
}
