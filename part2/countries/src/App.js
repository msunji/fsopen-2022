import axios from 'axios';
import Countries from './components/Countries';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const endpoint = 'https://restcountries.com/v3.1/all';
    axios.get(endpoint).then((res) => {
      if (filter) {
        const countryData = res.data.filter((country) =>
          country.name.common.toLowerCase().includes(filter.toLowerCase())
        );
        setCountries(countryData);
      }
    });
  }, [filter]);

  useEffect(() => {
    const endpoint = 'https://api.openweathermap.org/data/2.5/weather';
    const openWeatherKey = process.env.REACT_APP_OPENWEATHER_APIKEY;
    if (countries.length === 1) {
      const [capital] = countries[0].capital;
      console.log(capital);
      axios
        .get(`${endpoint}?q=${capital}&appid=${openWeatherKey}&units=metric`)
        .then((res) => {
          setWeather(res.data);
        });
    }
  }, [countries]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <div>
        <span>find countries</span>
        <input type="text" value={filter} onChange={handleFilter} />
        <Countries results={countries} weatherData={weather} />
      </div>
    </div>
  );
}

export default App;
