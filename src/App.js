import './App.css';
import { useState, useEffect } from 'react';
import Params from './Params';

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
      <div className='app-params-container'>
        <Params id="break-label" label="Break Length" counter={5}/>
        <Params id="break-label" label="Break Length" counter={5}/>
      </div>
      
    </div>
  );
}

export default App;
