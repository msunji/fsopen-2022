const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const blogsRouter = require('./controllers/blogs');
const { info, error } = require('./utils/logger');

const mongoose = require('mongoose');

const url = config.MONGODB_URI;

mongoose
  .connect(url)
  .then((res) => info('Connected to db'))
  .catch((err) => {
    error('error: ', err);
  });

app.use(cors());
app.use(express.json());
app.use('/api/blogs', blogsRouter);

module.exports = app;
