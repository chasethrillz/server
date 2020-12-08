/**
 * server.js
 * Vishal Kumar
 */

'use strict';

const express = require('express');
const app = express();

const Config = require('../config');
const port = Config.serverConfig.port;

const Controllers = require('../controller');

const init = async () => {
    return new Promise((resolve, reject) => {
        app.use(express.json());
        
        app.get('/', (req, res) => res.send(`
        Welcome to <strong>${Pack.name}</strong>.<br>
        Go to <a href='${Pack.repository.url}'>Github Repo</a>
        `)
        );

        app.post('/user', Controllers.User.createUser);
        app.get('/users', Controllers.User.getAllUsers);
        app.put('/user', Controllers.User.updateUser);
        app.get('/user/:userId', Controllers.User.getUser);
        app.delete('/user/:userId', Controllers.User.deleteUser);

        app.listen(port, () => console.log(`Server listening on localhost:${port}`));

        resolve(app);
    });
};

module.exports = {
    app,
    init
};