import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  // componentDidUpdate - executa toda vez que o component atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMout - executa 1x atualiza
  useEffect(() => {
    console.log('componentDidMout');
  }, []);

  // Com dependencia - executa toda vez que a dependecia mudar
  useEffect(() => {
    console.log('contador mudou para', counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>push</button>
    </div>
  );
}

export default App;
