const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

const genId = () => {
  return Math.floor(Math.random() * 88);
};

app.get('/info', (req, res) => {
  const phonebookLen = persons.length;
  const time = new Date();
  const routeText = `<p>Phonebook has info for ${phonebookLen} people. <br />
                    ${time}
                    </p>`;
  res.send(routeText);
});

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => {
    return person.id === id;
  });
  res.json(person);
});

app.post('/api/persons', (req, res) => {
  const person = req.body;

  const existing = persons.some(
    (entry) => entry.name.toLowerCase() === person.name.toLowerCase()
  );

  if (!person.name || !person.number) {
    return res.status(400).json({
      error: 'Missing name or number',
    });
  }
  if (existing) {
    return res.status(400).json({
      error: 'Entry already exists in phonebook',
    });
  }
  person.id = genId();
  res.json(person);
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  person = persons.filter((person) => person.id !== id);
  res.json(person);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Example app listening on PORT ${port}`);
});
