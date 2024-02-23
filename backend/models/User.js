const Sequelize = require('sequelize')
const db = require('../config/database.js');

const User = db.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    token: {
        type: Sequelize.STRING,
        allowNull: true
    },
    role: {
        type: Sequelize.STRING,
        defaultValue: 'user'
    }
});
module.exports = User;
