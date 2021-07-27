require('dotenv').config()
const Sequelize = require('sequelize');

const { 
  STUDYSPOTS_DB_USER, 
  STUDYSPOTS_DB_PASS, 
  STUDYSPOTS_DB_HOST,
  STUDYSPOTS_DB_NAME,
  NODE_ENV,
  STUDYSPOTS_ENV,
  STUDYSPOTS_DB_SHOULD_USE_CONNECTION_STRING
} = process.env;

const databaseCredentials = {
  "development": {
    "username": STUDYSPOTS_DB_USER,
    "password": STUDYSPOTS_DB_PASS,
    "database": STUDYSPOTS_DB_NAME,
    "host": STUDYSPOTS_DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": STUDYSPOTS_DB_USER,
    "password": STUDYSPOTS_DB_PASS,
    "database": STUDYSPOTS_DB_NAME,
    "host": STUDYSPOTS_DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": STUDYSPOTS_DB_USER,
    "password": STUDYSPOTS_DB_PASS,
    "database": STUDYSPOTS_DB_NAME,
    "host": STUDYSPOTS_DB_HOST,
    "dialect": "mysql"
  }
};

const { 
  username, password, database, host, dialect 
} = databaseCredentials[NODE_ENV];

module.exports.databaseConfig = databaseCredentials;

const mode = STUDYSPOTS_ENV;

console.log(`[DB]: Connecting to the database in ${mode} mode.`)

const databaseConfig = {
  host,
  dialect,
  port: 3306,
  dialectOptions: {
    multipleStatements: true,
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: false
};

module.exports.connection = STUDYSPOTS_DB_SHOULD_USE_CONNECTION_STRING === "true"
  ? new Sequelize(STUDYSPOTS_DB_HOST, databaseConfig) 
  : new Sequelize(database, username, password, databaseConfig);
