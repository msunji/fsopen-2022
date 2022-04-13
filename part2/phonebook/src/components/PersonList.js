const PersonList = ({ persons, filter, deletePerson }) => {
  return (
    <ul>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(({ name, number, id }) => (
          <li key={id}>
            {name} {number}{' '}
            <button onClick={() => deletePerson(id, name)}>delete</button>
          </li>
        ))}
    </ul>
  );
};

export default PersonList;
