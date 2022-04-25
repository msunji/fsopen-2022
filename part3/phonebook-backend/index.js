require('dotenv').config();
const express = require('express');
const logger = require('./middleware/logger');
const Person = require('./models/person');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(logger);

// const genId = () => {
//   return Math.floor(Math.random() * 88);
// };

app.get('/info', async (req, res) => {
  let numDocs = await Person.countDocuments({});
  const time = new Date();
  const routeText = `<p>Phonebook has info for ${numDocs} people. <br />
                    ${time}
                    </p>`;
  res.send(routeText);
});

app.get('/api/persons', (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons);
  });
});

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then((person) => {
      if (person) {
        res.json(person);
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      next(err);
    });
});

app.post('/api/persons', (req, res, next) => {
  const person = req.body;

  if (person.name === undefined) {
    return res.status(400).json({ error: 'missing content' });
  }

  const entry = new Person({
    name: person.name,
    number: person.number,
  });

  entry
    .save()
    .then((savedEntry) => {
      res.json(savedEntry);
    })
    .catch((err) => next(err));
});

app.put('/api/persons/:id', (req, res, next) => {
  const person = req.body;
  if (person.name === undefined) {
    return res.status(400).json({ error: 'missing content' });
  }
  const entry = {
    name: person.name,
    number: person.number,
  };

  Person.findByIdAndUpdate(req.params.id, entry, {
    new: true,
    runValidators: true,
    context: 'query',
  })
    .then((updatedPerson) => {
      res.json(updatedPerson);
    })
    .catch((err) => next(err));
});

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then((result) => {
      console.log('deleted successfully');
      res.status(204).end();
    })
    .catch((err) => {
      next(err);
    });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
