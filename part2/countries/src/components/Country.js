const WeatherInfo = ({ capital, weatherData }) => {
  const { main, wind, weather } = weatherData;
  const { icon, description } = weather[0];
  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>
        <b>Temperature:</b> {main.temp} celsius
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p>
        <b>Wind:</b> {wind.speed} m/s
      </p>
    </div>
  );
};

const Country = ({ data, weatherData }) => {
  const { name, area, languages, flags, capital } = data;
  return (
    <div>
      <h1>{name.common}</h1>
      <p>
        <b>Capital:</b> {capital[0]}
      </p>
      <p>
        <b>Area:</b> {area}
      </p>
      <b>Languages</b>
      <ul>
        {Object.keys(languages).map((language) => (
          <li key={languages[language]}>{languages[language]}</li>
        ))}
      </ul>
      <img height="300px" src={flags.svg} alt={`${name} flag`} />
      {weatherData && (
        <WeatherInfo capital={capital[0]} weatherData={weatherData} />
      )}
    </div>
  );
};

export default Country;
