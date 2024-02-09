import { useState } from "react";
import "./App.css";

function Hello(props) {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const name = "Peter";
  const age = 10;
  return (
    <>
      <h2>Greetings</h2>
      <Hello name="Maya" age={25 + 10} />
      <Hello name={name} age={age} />
    </>
  );
}

export default App;
