import Content from './Content';

const Header = ({ name }) => <h1>{name}</h1>;

const Course = ({ course }) => {
  let { name, parts } = course;
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
    </div>
  );
};

export default Course;
