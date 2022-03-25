const Filter = ({ filterVal, onFilterChange }) => {
  return (
    <div>
      Filter phonebook by name: <input value={filterVal} onChange={onFilterChange}/>
    </div>
  )
}

export default Filter;