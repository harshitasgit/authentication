const { Employee, validate } = require('../models/employee');
const express = require('express');
const router = express.Router();
 
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('user already exisits!');
    } else {
        user = new Employee({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            occupation: req.body.occupation
        });
        await user.save();
        res.send(user);
    }
});
 
module.exports = router;