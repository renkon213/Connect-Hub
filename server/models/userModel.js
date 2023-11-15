const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create user schema
const userSchema = new Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        unique: true, // Make sure email is unique
        validate: {
            validator: email => /@\S+\.(com|net|org|ca)$/.test(email), //must include an @ and end in the options listed
            message: props => `${props.value} is not a valid email address!`
        },
        required: [true, 'User email required']
    },
    password: { type: String, required: true },
    //Automatically create timestamp for user creation and update
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
