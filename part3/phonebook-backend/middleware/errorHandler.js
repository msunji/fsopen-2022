const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  if (err.name === 'CastError') {
    return res.status(400).send({ error: 'Malformatted id' });
  } else if (err.name === 'ValidationError') {
    let { errors } = err;
    return res.status(400).json({ error: errors.name.message });
  }
  next(err);
};

module.exports = errorHandler;
