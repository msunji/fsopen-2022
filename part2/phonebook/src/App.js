import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{
    name: 'Arto Hellas',
    number: '012-345-6789',
    id: 1,
  }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const handleNewNum = (event) => {
    setNewNumber(event.target.value);
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

  console.log(persons);
  return (
    <div>
      <h2>Phonebook</h2>
      Filter phonebook by name <input />
      <h2>Add a New Phonebook Entry</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          { persons.map(({ name, number, id}) => <li key={id}>{name} {number}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App;