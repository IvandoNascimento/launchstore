const { Pool } = require('pg');

module.exports = new Pool({
  user: 'postgres',
  password: 'ivan',
  host: 'localhost',
  port: 5432,
  database: 'launchstore'
});
