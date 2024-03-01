import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "345-434" },
  ]);
  const [newName, setNewName] = useState("nbnbv");
  const [newPhone, setNewPhone] = useState("54543");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    console.log("line 10", e);
    setNewName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
  };
  const addName = (e) => {
    console.log("line 14 inside addName function", newName);
    e.preventDefault();
    const found = persons.some((person) => person.name == newName);
    if (found) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons([...persons, { name: newName, number: newPhone }]);
    setNewName("");
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:{" "}
          <input onChange={handleNameChange} value={newName} name="name" />
          <br></br>
          number:{" "}
          <input onChange={handlePhoneChange} value={newPhone} name="number" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <div>
        {persons.map((person, id) => (
          <div key={id}>
            <span>{person.name}</span>
            <span>{person.number}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
