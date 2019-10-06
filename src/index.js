import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import RegisterForm from './registrationForm/RegisterForm';

const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/routes');
const express = require('express');
const app = express();


ReactDOM.render(<RegisterForm /> , document.getElementById('root'));

registerServiceWorker();
 
mongoose.connect('mongodb://localhost/user-information')
    .then(() => console.log('connected to MongoDB!'))
    .catch(err => console.error('error while connecting to mongodb', err));
 
app.use(express.json());
app.use('/api/users', users);
 
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port ${port}...`));