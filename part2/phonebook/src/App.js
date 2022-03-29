import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const handleNewNum = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();

    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    };

    const matchNames = (name1, name2) => {
      return name1.localeCompare(name2);
    } 

    if (persons.some(person => matchNames(person.name, personObj.name) === 0)) {
      alert(`${personObj.name} has already been added to the phonebook`);
    } else {
      setPersons(persons.concat(personObj));
      setNewName('');
      setNewNumber('');
    }
  }

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
  )
}

export default App;