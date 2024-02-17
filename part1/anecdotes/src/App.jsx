import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState(1);
  const [votes, setVotes] = useState([20, 2, 3, 4, 5, 6, 7, 8]);
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const handleNextAnecdoteClick = () => {
    // Generate a random number between 0 and 7
    setSelected(Math.floor(Math.random() * 8));
  };
  const handleVoteClick = () => {
    console.log("this is inside the handle vote");
    // Create a copy of the votes array
    const newPoints = [...votes];
    console.log("this is the new points", newPoints);
    // increment the vote count for the selected anecdote
    newPoints[selected] += 1;
    setVotes(newPoints);
    console.log("this is the current votes", newPoints);
  };
  const getLargestNumber = () => {
    const largestNumberIndex = votes.reduce(
      (acc, curr, index) => {
        if (curr > acc.number) {
          return { number: curr, index: index };
        } else {
          return acc;
        }
      },
      { number: -1, index: -1 }
    );
    console.log(largestNumberIndex);
    return largestNumberIndex.index;
  };
  const anecdoteWithMostVotes = getLargestNumber();
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h1>{anecdotes[selected]}</h1>
      <p>has {votes[selected]} votes</p>
      <div>
        <button onClick={handleVoteClick}>Vote</button>
        <button onClick={handleNextAnecdoteClick}>Next Anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <h1>{anecdotes[anecdoteWithMostVotes]}</h1>
      <p>has {votes[anecdoteWithMostVotes]} votes</p>
    </div>
  );
};

export default App;
