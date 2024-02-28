const { Sequelize } = require('sequelize');
const dbConfig = require('./config.js');

const { DB_HOST, DB_PORT, DB_NAME, DB_USER_NAME, DB_PASSWORD } = dbConfig.production;


const dbHost = process.env.DB_HOST || DB_HOST;
const dbPort = process.env.DB_PORT || DB_PORT;
const dbName = process.env.DB_NAME || DB_NAME;
const dbUserName = process.env.DB_USER_NAME || DB_USER_NAME;
const dbPassword = process.env.DB_PASSWORD || DB_PASSWORD;

const db = new Sequelize(dbName, dbUserName, dbPassword, {
    host: dbHost,
    dialect: 'mysql',
    port: dbPort,
});



// Test the database connection
async function testConnection() {
    try {
        await db.authenticate();
        console.log(`Db Connected. host:${dbHost} dbName:${dbName} dbUserName:${dbUserName}`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

module.exports = db;
