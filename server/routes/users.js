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
            if(!user) return res.status(404).send('no user found');
            res.status(200).json(user);
        })
        .catch(error => console.log(error));
});

router.post('/', (req, res) => {
    console.log(req.body);
    User(req.body)
        .save()
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => console.log(err));
});

router.put('/:id', (req, res) => {
    const updateUser = req.query;

    User
        .findByIdAndUpdate(req.params.id, updateUser)
        .then(user => {
            if(!user) return res.status(404).send('no user found');
            res.status(204).json(user);
        })
        .catch(err => console.log(err));
});

router.delete('/:id', (req, res) => {
    User
        .findByIdAndDelete(req.params.id)
        .then(user => {
            if(!user) return res.status(404).send('no user found');
            res.status(200).json(user);
        })
        .catch(err => console.log(err))
});

module.exports = router;
