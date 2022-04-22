const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  if (err.name === 'CastError') {
    return res.status(400).send({ error: 'Malformatted id' });
  } else if (err.name === 'ValidationError') {
    let allErrors = {};
    Object.keys(err.errors).forEach((key) => {
      allErrors[key] = err.errors[key].message;
    });
    return res.status(400).json({ error: allErrors });
  }
  next(err);
};

module.exports = errorHandler;
