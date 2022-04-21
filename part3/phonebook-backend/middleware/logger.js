const morgan = require('morgan');

morgan.token('person', (req, res) => {
  return JSON.stringify(req.body);
});

module.exports = morgan(
  ':method :url :status :res[content-length] - :response-time ms :person'
);
