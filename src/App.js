import './App.css';
import { useState, useEffect, useRef} from 'react';
import Params from './Params';

function App() {
const [sessionDuration, setSessionDuration] = useState(1)
const [breakDuration , setBreakDuration] = useState(5)
const minutesElement = useRef()
const secElement = useRef()
const intervalId = useRef(null)
const remainingTime = useRef(sessionDuration*60)


// if(intervalId.current) clearInterval(intervalId.current)
useEffect(()=>{
  clearInterval(intervalId.current)
  remainingTime.current = sessionDuration*60
  intervalId.current = setInterval(()=>{
    if( remainingTime.current <= 0) {
      clearInterval(intervalId.current)
      return
    }
      remainingTime.current = remainingTime.current -1
      const minutes = Math.floor(remainingTime.current/60);
      const sec = remainingTime.current%60
    
  
    minutesElement.current.innerHTML = minutes <10? `0${minutes}`: minutes
    secElement.current.innerHTML = sec
    
  },1000)
},[sessionDuration])

 

  return (
    <div className="App">
      <h1 className="App-header">
      25 + 5 Clock
      </h1>
      <div className='app-params-container'>
        <Params 
          id="break" 
          label="Break Length" 
          counter={breakDuration} 
          updateCounter={setBreakDuration}
          intervalId={intervalId}/>
        <Params 
          id="session" 
          label="Session Length" 
          counter={sessionDuration} 
          intervalId={intervalId}
          updateCounter={setSessionDuration}/>
      </div>
      <div className='timer-container'>
        <h4 id='timer-label' className='timer-label'>
          Session
        </h4>
        <div id="time-left">
          <span className='minutes' ref={minutesElement}>{sessionDuration <10? `0${sessionDuration}`: sessionDuration}</span>
          :
          <span className='seconds' ref={secElement}>{'00'}</span>
        </div>
      </div>
      
    </div>
  );
}

export default App;

