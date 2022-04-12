import { useState } from 'react';
import Country from './Country';

const ListItem = ({ country }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <p>
        <span>{country.name.common}</span>
        <button onClick={() => setShow(!show)}>show</button>
      </p>
      {show && <Country data={country} />}
    </div>
  );
};

const Countries = ({ results, handleShow, show }) => {
  if (results.length > 10) {
    return (
      <div>
        <p>Too many matches, please use a more specific search query.</p>
      </div>
    );
  } else if (results.length <= 10 && results.length > 1) {
    return (
      <div>
        {results.map((country) => (
          <ListItem key={country.name.common} country={country} />
        ))}
      </div>
    );
  } else if (results.length === 1) {
    return <Country data={results[0]} />;
  } else {
    return null;
  }
};

export default Countries;
