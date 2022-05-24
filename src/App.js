import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import P from 'prop-types';

const Button = ({ incrementButton }) => {
  return <button onClick={() => incrementButton(100)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (num) => {
    setCounter(counter + num);
  };

  return (
    <div className="App">
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
