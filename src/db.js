const { Pool } = require('pg');
const config = require('./config');

const pool = new Pool({
  host: config.db.host,
  port: config.db.port,
  database: config.db.name,
  user: config.db.user,
  password: config.db.password
});

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to database successfully');
  release();
});

// Export query function for use in API
module.exports = {
  query: (text, params) => pool.query(text, params)
};