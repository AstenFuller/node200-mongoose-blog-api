const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const User = require('../models/User');

router.get('/', (req, res) => {
    Blog
        .find()
        .then(blogs => {
            res.status(200).json(blogs);
        });
});

router.get('/featured', (req, res) => {
    Blog
        .find()
        .where('featured').equals(true)
        .then(featured => {
            res.status(200).json(featured);
        })
});

router.post('/', (req, res) => {
    let dbUser = null;

    User
        .findById(req.body.author)
        .then(user => {
            dbUser = user;

            const newBlog = new Blog(req.body);

            newBlog.author = user._id;

            return newBlog.save();
        })
        .then(blog => {
            dbUser.blogs.push(blog);

            dbUser.save().then(() => res.status(201).json(blog));
        })

});

router.get('/:id', (req, res) => {
    Blog
        .findById(req.params.id)
        .then(blog => {
            if(!blog) return res.status(404).send('no blog found');
            res.status(200).json(blog);
        });
});

router.put('/:id', (req, res) => {
    const updateBlog = req.body;

    Blog
        .findByIdAndUpdate(req.params.id, updateBlog)
        .then(blog => {
            if(!blog) return res.status(404).send('no blog found');
            res.status(204).json(blog);
        })
        .catch(err => console.log(err));
});

router.delete('/:id', (req, res) => {
    Blog
        .findByIdAndDelete(req.params.id)
        .then(blog => {
            if(!blog) return res.status(404).send('no blog found');
            res.status(200).json(blog);
        })
        .catch(err => console.log(err))
})

module.exports = router;
