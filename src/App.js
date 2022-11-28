import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const decrementBtnHandler = () => {
    setCount(prevCount => prevCount - 1);
  };

  const incrementBtnHandler = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <h1>Satyam Tiwari</h1>
      <div>
        <button onClick={decrementBtnHandler} className='btn'>-</button>
        <label>{count}</label>
        <button onClick={incrementBtnHandler} className='btn'>+</button>
      </div>
    </div>
  );
}

export default App;
