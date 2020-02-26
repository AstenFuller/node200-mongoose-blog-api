const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/my-blog', { useMongoClient: true });
mongoose.promise = Promise;

app.use(morgan('dev'));
app.use(express.urlencoded());
app.use(express.json());

app.use('/api/users', require('./routes/users'));

app.get('/', (req, res) => {
    res.status(200).send();
});


module.exports = app;