import './App.css';
import { useState, useEffect } from 'react';
import Params from './Params';

function App() {
const [sessionDuration, setSessionDuration] = useState(25)
const [breakDuration , setBreakDuration] = useState(5)
function updateCounter(event, target){
  // if(target === 'sessio')
}
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
        <Params id="break" label="Break Length" counter={breakDuration} updateCounter={setBreakDuration}/>
        <Params id="session" label="Session Length" counter={sessionDuration} updateCounter={setSessionDuration}/>
      </div>
      
    </div>
  );
}

export default App;
