import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  const endpoint = 'https://restcountries.com/v3.1/all';

  useEffect(() => {
    axios.get(endpoint).then((res) => {
      console.log(res);
      setCountries(res.data);
    });
  }, []);

  return (
    <div>
      <div>
        <span>find countries</span>
        <input type="text" />
      </div>
    </div>
  );
}

export default App;
