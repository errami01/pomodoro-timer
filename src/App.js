import './App.css';
import { useState, useEffect } from 'react';

function App() {
const [amount, setAmount] = useState(10)
useEffect(()=>{
  setInterval(()=>{

  },1000)
},[])
  return (
    <div className="App">
      <h1 className="App-header">
      25 + 5 Clock
      </h1>
    </div>
  );
}

export default App;
