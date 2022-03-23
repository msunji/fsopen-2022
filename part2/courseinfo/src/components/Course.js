const Header = ({ name }) => <h1>{name}</h1>;

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
    </div>
  );
};

export default Course;
