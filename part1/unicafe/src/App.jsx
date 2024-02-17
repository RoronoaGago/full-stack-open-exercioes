import { useState } from "react";

const Title = ({ content }) => <h1>{content}</h1>;
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>
      {value}
      {text == "positive feedback" && <span>%</span>}
    </td>
  </tr>
);
const Statistics = ({
  good,
  neutral,
  bad,
  total,
  average,
  positiveFeedback,
}) => {
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive feedback" value={positiveFeedback} />
      </tbody>
    </table>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const GOOD_AVERAGE = 1;
  const NEUTRAL_AVERAGE = 0;
  const BAD_AVERAGE = -1;
  const average =
    (good * GOOD_AVERAGE + neutral * NEUTRAL_AVERAGE + (bad + BAD_AVERAGE)) /
    total;
  const positiveFeedback = (good / total) * 100;
  return (
    <div>
      <Title content="Give Feedback" />
      <div>
        <Button text="good" onClick={() => setGood(good + 1)} />
        <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button text="bad" onClick={() => setBad(bad + 1)} />
      </div>
      <Title content="Statistics" />
      {total == 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          average={average}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
};

export default App;
