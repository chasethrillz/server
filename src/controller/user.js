/**
 * user.js
 * Vishal Kumar
 */

'use strict';

const Models = require('../models');

const createUser = async (req, res) => {
    try {
        const newUser = new Models.User(req.body);
        await newUser.save();
        res.json({ user: newUser });
    } catch (error) {
        throw (error);
    }
};

const getAllUsers = async (req, res) => {
    try {
        const user = await Models.User.findAll({});
        res.json({ user });
    } catch (error) {
        throw (error);
    }
};

const getUser = async (req, res) => {
    try {
        const user = await Models.User.findAll({ where: { id: req.params.userId } });
        res.json({ user });
    } catch (error) {
        throw (error);
    }
};

const updateUser = async (req, res) => {
    try {
        let criteria = { id: req.body.userId };
        let dataToUpdate = { firstName: req.body.firstName, lastName: req.body.lastName };
        const user = await Models.User.update(dataToUpdate, { where: criteria });
        res.json({ user });
    } catch (error) {
        throw (error);
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUsersCount = await Models.User.destroy({ where: { id: req.params.userId } });
        res.json({ deletedUsersCount });
    } catch (error) {
        throw (error);
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
};