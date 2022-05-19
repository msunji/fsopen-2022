const config = require('./utils/config');
const express = require('express');
require('express-async-errors');
const app = express();
const cors = require('cors');
const blogsRouter = require('./controllers/blogs');
const { info, error } = require('./utils/logger');

const mongoose = require('mongoose');

const url = config.MONGODB_URI;

// Set this up so that you don't connect to the actual database in testing
if (process.env.NODE_ENV !== 'test') {
  mongoose
    .connect(url)
    .then((res) => info('Connected to db'))
    .catch((err) => {
      error('error: ', err);
    });
}

app.use(cors());
app.use(express.json());
app.use('/api/blogs', blogsRouter);

module.exports = app;
