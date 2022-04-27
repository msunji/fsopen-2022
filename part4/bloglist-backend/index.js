require('dotenv').config();
const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const Blog = require('./models/blog');
const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;

mongoose
  .connect(url)
  .then((res) => console.log('Connected to db'))
  .catch((err) => {
    console.log('error connecting: ', err.message);
  });

app.use(cors());
app.use(express.json());

app.get('/api/blogs', (req, res) => {
  Blog.find({}).then((blogs) => {
    res.json(blogs);
  });
});

app.post('/api/blogs', (req, res) => {
  const blog = new Blog(req.body);
  console.log(req.body);
  blog
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => console.error(err));
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
