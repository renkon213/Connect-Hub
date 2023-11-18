require("dotenv").config();

//Store username and password to variables from .env file
const username = process.env.USER;
const password = process.env.PASSWORD;

const MONGODB_URL = `mongodb+srv://${username}:${password}@connecthub.xoa3wfo.mongodb.net/users?retryWrites=true&w=majority`;

module.exports = MONGODB_URL;
