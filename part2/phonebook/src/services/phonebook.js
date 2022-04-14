import axios from 'axios';
const endpoint = 'http://localhost:3001/persons';

/* Get all entries in the persons array */
const getPersons = () => {
  const res = axios.get(endpoint);
  return res.then((res) => res.data);
};

/* Add a new person to the phonebook */
const createPerson = (person) => {
  const res = axios.post(endpoint, person);
  return res.then((res) => res.data);
};

const del = (id) => {
  axios.delete(`${endpoint}/${id}`);
};

/* Update phonebook entry phone number */
const updatePerson = (updatedPerson) => {
  const res = axios.put(`${endpoint}/${updatedPerson.id}`, updatedPerson);
  return res.then((res) => res.data);
};

const phonebook = {
  getPersons,
  createPerson,
  del,
  updatePerson,
};

/* Export module */
export default phonebook;
