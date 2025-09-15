const Sequelize = require('sequelize');

const sequelize = require('../util/database');
// const { name } = require('ejs');

const User = sequelize.define('user', {
    // id, name, email
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING, // defaults to VARCHAR(255)
        allowNull: false // user must have a name
    },
    email: {
        type: Sequelize.STRING, // Varchar(255) is fine for email
        allowNull: false,
        unique: true // no duplicate emails allowed
    }
});

module.exports = User;