const Sequelize = require('sequelize')
const db = require('../DB/database.js');

const User = db.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false,
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
    },
    resetToken: {
        type: Sequelize.STRING,
        allowNull: true
    }
});
module.exports = User;

