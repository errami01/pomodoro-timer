import './App.css';
import { useState, useEffect, useRef} from 'react';
import Params from './Params';

function App() {
// const [sessionDuration, setSessionDuration] = useState(1)
// const [breakDuration , setBreakDuration] = useState(5)
const [timer, setTimer] = useState({turn: 'session', sessionLength: 1, breakLength: 1})
const minutesElement = useRef()
const secElement = useRef()
const intervalId = useRef(null)
const remainingTime = useRef(timer.sessionLength*60)


// if(intervalId.current) clearInterval(intervalId.current)
useEffect(()=>{
  clearInterval(intervalId.current)
  if(timer.turn === 'session') remainingTime.current = timer.sessionLength*60
  else remainingTime.current = timer.breakLength*60
  intervalId.current = setInterval(()=>{
    if( remainingTime.current <= 0) {
      clearInterval(intervalId.current)
      setTimer(prev=>({
        ...prev,
        turn: prev.turn==='session'? 'break':'session'
      }))
      return
    }
  remainingTime.current = remainingTime.current -1
  const minutes = Math.floor(remainingTime.current/60);
  const sec = remainingTime.current%60
    
  
    minutesElement.current.innerHTML = minutes <10? `0${minutes}`: minutes
    secElement.current.innerHTML = sec
    
  },1000)
},[timer.turn==='session'? timer.sessionLength:timer.breakLength,timer.turn])
const displayedTimer = timer.turn === 'session'? timer.sessionLength<10? `0${timer.sessionLength}`: timer.sessionLength
                                                : timer.breakLength<10? `0${timer.breakLength}`:timer.breakLength
 

  return (
    <div className="App">
      <h1 className="App-header">
      25 + 5 Clock
      </h1>
      <div className='app-params-container'>
        <Params 
          id="break" 
          label="Break Length" 
          counter={timer.breakLength} 
          updateCounter={setTimer}
          intervalId={intervalId}/>
        <Params 
          id="session" 
          label="Session Length" 
          counter={timer.sessionLength} 
          intervalId={intervalId}
          updateCounter={setTimer}/>
      </div>
      <div className='timer-container'>
        <h4 id='timer-label' className='timer-label'>
          {timer.turn==="session"? "Session":'Break'}
        </h4>
        <div id="time-left">
          <span className='minutes' ref={minutesElement}>{displayedTimer}</span>
          :
          <span className='seconds' ref={secElement}>{'00'}</span>
        </div>
      </div>
      
    </div>
  );
}

export default App;

