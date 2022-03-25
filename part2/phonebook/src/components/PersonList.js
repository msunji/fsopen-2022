const PersonList = ({ persons, filter }) => {
  return (
    <ul>
      {
        persons
          .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
          .map(({ name, number, id }) => <li key={id}>{name} {number}</li>)
      }
    </ul>
  )
} 

export default PersonList;