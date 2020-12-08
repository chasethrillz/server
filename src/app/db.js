/**
 * db.js
 * Vishal Kumar
 */

'use strict';
const Sequelize = require('sequelize');
const Config = require('../config');

const sequelize = new Sequelize(`postgres://${Config.dbConfig.username}:${Config.dbConfig.password}@${Config.dbConfig.host}:${Config.dbConfig.port}/${Pack.name}`);

const init = async () => {
    return new Promise((resolve, reject) => {
        sequelize
            .authenticate()
            .then(() => {
                resolve(sequelize);
            })
            .catch(err => {
                reject('Unable to connect to the database:', err);
            });
    });
};

module.exports = {
    sequelize,
    init
};