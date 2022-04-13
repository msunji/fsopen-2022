import { useState, useEffect } from 'react';
import './styles/styles.css';
import phonebook from './services/phonebook';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState(false);

  useEffect(() => {
    phonebook.getPersons().then((persons) => {
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

  const removeMsg = () => {
    if (err) {
      setTimeout(() => {
        setMsg('');
        setErr(false);
      }, 4000);
    } else {
      setTimeout(() => {
        setMsg('');
      }, 4000);
    }
  };

  const addPerson = (event) => {
    event.preventDefault();

    const personObj = {
      name: newName,
      number: newNumber,
      id: new Date().getUTCMilliseconds(),
    };

    const personName = persons.find(
      (person) => person.name.toLowerCase() === personObj.name.toLowerCase()
    );
    const personNumber = persons.find(
      (person) => person.number === personObj.number
    );

    if (personName && personNumber) {
      alert(`${personObj.name} has already been added to the phonebook`);
    } else if (personName && !personNumber) {
      if (
        window.confirm(
          `${personObj.name} already exists. Would you like to replace the old number with a new one?`
        )
      ) {
        phonebook
          .updatePerson(personName.id, {
            ...personName,
            number: personObj.number,
          })
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== personName.id ? person : updatedPerson
              )
            );
            setMsg(`Successfully updated ${updatedPerson.name}'s number`);
            removeMsg();
            setNewName('');
            setNewNumber('');
          })
          .catch((err) => {
            setMsg(
              `It looks like ${personName.name}'s already been removed from the phonebook.`
            );
            setErr(true);
            removeMsg();
          });
      }
      return;
    } else {
      phonebook.createPerson(personObj).then((newPerson) => {
        setPersons(persons.concat(newPerson));
        setMsg(`Successfully added ${newPerson.name}`);
        removeMsg();
        setNewName('');
        setNewNumber('');
      });
    }
  };

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      phonebook.deletePerson(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
    return;
  };

  return (
    <div className="phonebook-container">
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
      {msg && <Notification message={msg} error={err} />}
      <h2>Numbers</h2>
      <PersonList
        persons={persons}
        filter={filter}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
