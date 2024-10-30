const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const blogsRouter = require('./controllers/blogs');
const mongoose = require('mongoose');

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        console.log('connected to mongoDB');
    })
    .catch(error => {
        console.error(`error connecting to mongoDB ${error.message}`);
    });

app.use(express.json());
app.use(cors());

app.use('/api/blogs', blogsRouter);

module.exports = app;