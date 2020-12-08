/**
 * user.js
 * Vishal Kumar
 */

'use strict';

const Sequelize = require('sequelize');
const Config = require('../config');

// const sequelize = require('../app').db.sequelize;
const sequelize = new Sequelize(`postgres://${Config.dbConfig.username}:${Config.dbConfig.password}@${Config.dbConfig.host}:${Config.dbConfig.port}/${Pack.name}`);

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
        // allowNull defaults to true
    }
}, { // options
});

// Note: using `force: true` will drop the table if it already exists

User.sync({ force: true }); // Now the `users` table in the database corresponds to the model definition

module.exports = User;