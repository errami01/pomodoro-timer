import './App.css';
import { useState, useEffect } from 'react';
import Params from './Params';

function App() {
const [sessionDuration, setSessionDuration] = useState(25)
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
        <Params id="session-label" label="Session Length" counter={sessionDuration}/>
      </div>
      
    </div>
  );
}

export default App;
