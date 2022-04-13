import { useState, useEffect } from 'react';
import personsService from './services/persons';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const endpoint = 'http://localhost:3001/persons';

  useEffect(() => {
    personsService.getPersons((persons) => {
      setPersons(persons);
    });
  }, []);

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNum = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    const matchNames = (name1, name2) => {
      return name1.localeCompare(name2);
    };

    if (
      persons.some((person) => matchNames(person.name, personObj.name) === 0)
    ) {
      alert(`${personObj.name} has already been added to the phonebook`);
    } else {
      personsService.createPerson(personObj).then((newPerson) => {
        setPersons(persons.concat(newPerson));
        setNewName('');
        setNewNumber('');
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterVal={filter} onFilterChange={handleFilter} />
      <h2>Add a New Phonebook Entry</h2>
      <PersonForm
        onFormSubmit={addPerson}
        name={newName}
        handleName={handleNewName}
        number={newNumber}
        handleNumber={handleNewNum}
      />
      <h2>Numbers</h2>
      <PersonList persons={persons} filter={filter} />
    </div>
  );
};

export default App;
