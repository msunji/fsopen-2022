import axios from 'axios';

const endpoint = 'http://localhost:3001/persons';

/* Get all entries in the persons array */
const getPersons = () => {
  const res = axios.get(endpoint);
  return res.then((res) => res.data);
};

/* Update the persons array */
const createPerson = (person) => {
  const res = axios.post(endpoint, person);
  return res.then((res) => res.data);
};

/* Export module */
const persons = {
  getPersons,
  createPerson,
};

export default persons;
