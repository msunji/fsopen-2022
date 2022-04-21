require('dotenv').config();
const express = require('express');
const logger = require('./middleware/logger');
const Person = require('./models/person');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('client'));
app.use(express.json());
app.use(logger);

// const genId = () => {
//   return Math.floor(Math.random() * 88);
// };

app.get('/info', (req, res) => {
  const phonebookLen = persons.length;
  const time = new Date();
  const routeText = `<p>Phonebook has info for ${phonebookLen} people. <br />
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

app.post('/api/persons', (req, res) => {
  const person = req.body;

  if (person.name === undefined) {
    return res.status(400).json({ error: 'missing content' });
  }

  const entry = new Person({
    name: person.name,
    number: person.number,
  });

  entry.save().then((savedEntry) => {
    res.json(savedEntry);
  });

  // const existing = persons.some(
  //   (entry) => entry.name.toLowerCase() === person.name.toLowerCase()
  // );

  // if (!person.name || !person.number) {
  //   return res.status(400).json({
  //     error: 'Missing name or number',
  //   });
  // }
  // if (existing) {
  //   return res.status(400).json({
  //     error: 'Entry already exists in phonebook',
  //   });
  // }
  // person.id = genId();
  // res.json(person);
});

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then((res) => {
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
