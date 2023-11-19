const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");
const MONGODB_URL = require("./config/index");

// Initialize express app
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: " Welcome to ConnectHub!" });
});
// Connect to MongoDB
mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

//Use user routes
app.use("/", userRoutes);
app.use("/auth", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
