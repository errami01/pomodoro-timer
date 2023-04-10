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
      <header className="App-header">
      25 + 5 Clock
      </header>
    </div>
  );
}

export default App;
