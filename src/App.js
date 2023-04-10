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
      <div className='timer-container'>
        <h4 id='timer-label' className='timer-label'>
          Session
        </h4>
        <div id="time-left">
          <span className='minutes'>{sessionDuration <10? `0${sessionDuration}`: sessionDuration}</span>
          :
          <span className='seconds'>{'00'}</span>
        </div>
      </div>
      
    </div>
  );
}

export default App;
