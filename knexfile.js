const config = require('./config');

const dbConfig = {
  client: 'mysql',
  connection: {
    host : config.MYSQL_HOST,
    user : config.MYSQL_USER,
    password : config.MYSQL_PASSWORD,
    database : config.MYSQL_DATABASE
  }
};

module.exports = {
  development: dbConfig,
  staging: dbConfig,
  production: dbConfig
};
