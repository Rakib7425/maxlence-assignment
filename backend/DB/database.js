const { Sequelize } = require('sequelize');

const dbHost = process.env.DB_HOST || 'localhost';
const dbName = process.env.DB_NAME || 'maxlence';
const dbUserName = process.env.DB_USER_NAME || 'root';
const dbPassword = process.env.DB_PASSWORD || '';

const db = new Sequelize(dbName, dbUserName, dbPassword, {
    host: dbHost,
    dialect: 'mysql',
});

// Test the database connection
async function testConnection() {
    try {
        await db.authenticate();
        console.log(`Db Connected.... host:${dbHost} dbName:${dbName} dbUserName:${dbUserName}`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

module.exports = db;
