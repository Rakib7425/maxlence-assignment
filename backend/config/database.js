const { Sequelize } = require('sequelize');

const db = new Sequelize('maxlence', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

// Test the database connection
async function testConnection() {
    try {
        await db.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

module.exports = db;
