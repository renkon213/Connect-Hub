const express = require('express');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
const MONGODB_URL = require('./config/index');

// Initialize express app
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Connect to MongoDB
mongoose.connect(MONGODB_URL).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));



//Use user routes
app.use('/api/users', userRoutes);
app.use('/auth', userRoutes);



// start server
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}.`);
});