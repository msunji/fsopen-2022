import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const addName = (event) => {
    event.preventDefault();

    const nameObj = {
      name: newName
    };

    const matchNames = (name1, name2) => {
      return name1.localeCompare(name2);
    } 

    if (persons.some(person => matchNames(person.name, nameObj.name) === 0)) {
      alert(`${nameObj.name} has already been added to the phonebook`);
    } else {
      setPersons(persons.concat(nameObj));
      setNewName('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          { persons.map(person => <li key={person.name.replace(/ /g, "")}>{person.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App;