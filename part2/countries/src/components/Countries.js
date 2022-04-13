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
      {show && <Country data={country} weather={null} />}
    </div>
  );
};

const Countries = ({ results, weatherData }) => {
  console.log(weatherData);
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
    return <Country data={results[0]} weatherData={weatherData} />;
  } else {
    return null;
  }
};

export default Countries;
