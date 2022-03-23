const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};
const Content = ({ parts }) => {
  let sumExercises = parts.reduce(
    (prev, current) => prev + current.exercises,
    0
  );
  return (
    <>
      <div>
        {parts.map(({ name, exercises, id }) => (
          <Part key={id} name={name} exercises={exercises} />
        ))}
      </div>
      <p>
        <b>total of {sumExercises} exercises</b>
      </p>
    </>
  );
};

export default Content;
