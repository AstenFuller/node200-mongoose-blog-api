const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    User
        .find()
        .then(users => {
            res.status(200).json(users);
        });
});

router.get('/:id', (req, res) => {
    User 
        .findById(req.params.id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(error => console.log(error));
});

router.post('/', (req, res) => {
    const newUser = req.query;
    
    User(newUser)
        .save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => console.log(err));
});

router.put('/:id', (req, res) => {
    const updateUser = req.query;

    User(updateUser)
        findByIdAndUpdate()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => console.log(err));
});
module.exports = router;