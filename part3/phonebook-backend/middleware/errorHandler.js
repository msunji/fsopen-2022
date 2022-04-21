const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  if (err.name === 'CastError') {
    return res.status(400).send({ error: 'Malformatted id' });
  }
  next(err);
};

module.exports = errorHandler;
