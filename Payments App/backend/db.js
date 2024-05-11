// create a shecma for the database
// 1. allow user to sign in
// 2. allow user to sign up
// 3. allow user to update first name last name password

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:C6hFklqm38RYM8kW@cluster0.kfgdsal.mongodb.net/')

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        minlength : 3,
        maxlength : 30
    },
    firstname: {
        type : String,
        required : true,
        maxlength : 60 
    },
    lastname: {
        type : String,
        required : true,
        trim : true,
        maxlength : 60
    },
    password : {
        type : String,
        required : true,
        trim : true,
        minlength : 6
    }
})

const accountSchema = new mongoose.Schema({
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    User,
    Account
};