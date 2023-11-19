//Require user schema
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
// const expressjwt = require("express-jwt");

//Define all user controller methods and logic

module.exports = {
  //POST request
  createUser: async (req, res) => {
    const user = new User(req.body);
    try {
      await user.save();
      return res.status(200).json({
        message: "Successfully signed up!",
      });
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  },

  //GET request
  findAll: async (req, res) => {
    try {
      const users = await User.find();
      res.json({ user: users, message: "All Users retrieved successfully." });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  //GET request
  findByID: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json({ user: user, message: "User retrieved successfully." });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  //PUT request
  updateUser: async (req, res) => {
    try {
      const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json({ user: updateUser, message: "User updated successfully." });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  //DELETE request
  deleteUser: async (req, res) => {
    try {
      const deleteUser = await User.findByIdAndDelete(req.params.id);
      res.json({ user: deleteUser, message: "User deleted successfully." });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  //POST request
  userSignIn: async (req, res) => {
    try {
      /* ADD AUTHENTICATION FOR SIGN IN */
      let user = await User.findOne({ email: req.body.email });
      if (!user) return res.status("401").json({ error: "User not found" });
      if (!user.authenticate(req.body.password)) {
        return res
          .status("401")
          .send({ error: "Email and password don't match." });
      }
      const token = jwt.sign({ _id: user._id }, config.jwtSecret);
      res.cookie("t", token, { expire: new Date() + 9999 });
      return res.json({
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  userSignOut: async (req, res) => {
    try {
      /* ADD AUTHENTICATION FOR SIGN OUT */
      res.clearCookie("t");
      return res.status("200").json({
        message: "Signed out successful!! ",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};
