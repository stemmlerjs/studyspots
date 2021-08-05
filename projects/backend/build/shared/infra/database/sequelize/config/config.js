"use strict";
require('dotenv').config();
var Sequelize = require('sequelize');
var _a = process.env, STUDYSPOTS_DB_USER = _a.STUDYSPOTS_DB_USER, STUDYSPOTS_DB_PASS = _a.STUDYSPOTS_DB_PASS, STUDYSPOTS_DB_HOST = _a.STUDYSPOTS_DB_HOST, STUDYSPOTS_DB_NAME = _a.STUDYSPOTS_DB_NAME, NODE_ENV = _a.NODE_ENV, STUDYSPOTS_ENV = _a.STUDYSPOTS_ENV, STUDYSPOTS_DB_SHOULD_USE_CONNECTION_STRING = _a.STUDYSPOTS_DB_SHOULD_USE_CONNECTION_STRING;
var databaseCredentials = {
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
var _b = databaseCredentials[NODE_ENV], username = _b.username, password = _b.password, database = _b.database, host = _b.host, dialect = _b.dialect;
module.exports.databaseConfig = databaseCredentials;
var mode = STUDYSPOTS_ENV;
console.log("[DB]: Connecting to the database in " + mode + " mode.");
var databaseConfig = {
    host: host,
    dialect: dialect,
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
