const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes and associate them with their respective controller methods

//Create user
router.post('/', userController.createUser);

//Get all users
router.get('/', userController.findAll);

// Find user by ID
router.get('/:id', userController.findByID);

// Update user
router.put('/:id', userController.updateUser);

// Delete user
router.delete('/:id', userController.deleteUser);

// User authentication routes
router.post('/signin', userController.userSignIn);

router.get('/signout', userController.userSignOut);

module.exports = router;