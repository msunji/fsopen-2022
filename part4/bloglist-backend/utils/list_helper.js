const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (sum, obj) => {
    return sum + obj.likes;
  };

  return blogs.length === 0 ? 0 : blogs.reduce(reducer, 0);
};

module.exports = {
  dummy,
  totalLikes,
};
