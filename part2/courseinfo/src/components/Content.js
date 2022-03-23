const Content = ({ parts }) => {
  let sumExercises = parts.reduce(
    (prev, current) => prev + current.exercises,
    0
  );
  return (
    <>
      <div>
        {parts.map(({ name, exercises, id }) => (
          <p key={id}>
            {name} {exercises}
          </p>
        ))}
      </div>
      <p>
        <b>total of {sumExercises} exercises</b>
      </p>
    </>
  );
};

export default Content;
