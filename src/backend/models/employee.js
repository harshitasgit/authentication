const Joi = require('joi');
const mongoose = require('mongoose');
 
const Employee = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    occupation: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
}));
 
function validateUser(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
        phone: Joi.string().min(10).max(10).required(),
        occupation:Joi.min(5).max(255).required()
    };
    return Joi.validate(user, schema);
}
 
exports.Employee = Employee;
exports.validate = validateUser;