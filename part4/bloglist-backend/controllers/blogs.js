const { info, error } = require('../utils/logger');
const blogsRouter = require('express').Router();
const Blog = require('../models/blog');

blogsRouter.get('/', async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
  // console.log('operation returned the following blog posts:', blogs);
});

blogsRouter.post('/', async (req, res) => {
  const blog = new Blog(req.body);

  if (typeof blog.title === 'undefined' || typeof blog.url === 'undefined') {
    return res.status(400).end();
  }

  const savedBlog = await blog.save();
  res.status(201).json(savedBlog);
  console.log('Saved post is as follows:', savedBlog);
});

blogsRouter.delete('/:id', async (req, res) => {
  await Blog.findByIdAndRemove(req.params.id);
  res.status(204).end();
});

blogsRouter.put('/:id', async (req, res) => {
  const blog = {
    likes: req.body.likes,
  };

  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, blog, {
    new: true,
  });
  res.json(updatedBlog);
});

module.exports = blogsRouter;
