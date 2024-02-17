import React from "react";
const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};
const Total = ({ parts }) => {
  const totalExercises = parts.reduce((accumulator, currentValue) => {
    console.log(
      "what is happening here in line 12?",
      accumulator,
      currentValue
    );
    return accumulator + currentValue.exercises;
  }, 0);
  return <strong>total of {totalExercises} exercises</strong>;
};
const Content = ({ parts }) => {
  console.log(parts);
  return (
    <div>
      {parts.map((part) => {
        return <Part key={part.name} part={part} />;
      })}
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
