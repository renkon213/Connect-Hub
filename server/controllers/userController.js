//Require user schema
const User = require('../models/userModel');

//Define all user controller methods and logic 

module.exports = {
    //POST request
    createUser: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            /* SIMRAN */
            /* Add password hashing here  */

            const newUser = await User.create({ name, email, password });
            res.json({ user: newUser, message: 'User created successfully.' });
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    //GET request
    findAll: async (req, res) => {
        try {
            const users = await User.find();
            res.json({ user: users, message: 'All Users retrieved successfully.' });
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    //GET request
    findByID: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.json({ user: user, message: 'User retrieved successfully.' });
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    //PUT request
    updateUser: async (req, res) => {
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json({ user: updateUser, message: 'User updated successfully.' });
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    //DELETE request
    deleteUser: async (req, res) => {
        try {
            const deleteUser = await User.findByIdAndDelete(req.params.id);
            res.json({ user: deleteUser, message: 'User deleted successfully.' });
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    //POST request
    /* SIMRAN */
    userSignIn: async (req, res) => {
        try {
            /* ADD AUTHENTICATION FOR SIGN IN */
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    /* SIMRAN */
    userSignOut: async (req, res) => {
        try {
            /* ADD AUTHENTICATION FOR SIGN OUT */
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
};

