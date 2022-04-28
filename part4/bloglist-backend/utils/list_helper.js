const { info } = require('../utils/logger');

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (sum, obj) => {
    return sum + obj.likes;
  };

  return blogs.length === 0 ? 0 : blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  const reducer = (prev, current) => {
    if (prev.likes > current.likes) {
      return { title: prev.title, author: prev.author, likes: prev.likes };
    }
    return current;
  };
  info(blogs.reduce(reducer, blogs[0]));

  return blogs.length === 0 ? null : blogs.reduce(reducer, blogs[0]);
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
