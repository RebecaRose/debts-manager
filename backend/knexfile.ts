require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'debts_manager',
      user:     'root',
      password: ''
    },
    searchPath: ['knex', 'public'],
  },

  testing: {
    client: 'mysql',
    connection: {
      database: 'debts_manager',
      user:     'root',
      password: ''
    },
    searchPath: ['knex', 'public'],
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'debts_manager',
      user:     'root',
      password: ''
    },
    searchPath: ['knex', 'public'],
  },
};
