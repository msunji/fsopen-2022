const Country = ({ data }) => {
  const { name, area, languages, flags, capital } = data;
  return (
    <div>
      <h1>{name.common}</h1>
      <p>capital {capital[0]}</p>
      <p>area {area}</p>
      <b>languages</b>
      <ul>
        {Object.keys(languages).map((language) => (
          <li key={languages[language]}>{languages[language]}</li>
        ))}
      </ul>
      <img height="300px" src={flags.svg} alt={`${name} flag`} />
    </div>
  );
};

export default Country;
