import './App.css';
import { useState, useEffect, useRef} from 'react';
import Params from './Params';
const DEFAULT_SESSION = 1;
const DEFAULT_BREAK = 1
function App() {
// const [sessionDuration, setSessionDuration] = useState(1)
// const [breakDuration , setBreakDuration] = useState(5)
const [timer, setTimer] = useState({
  turn: 'session', 
  sessionLength: DEFAULT_SESSION, 
  breakLength: DEFAULT_BREAK,
  play: false,
  reset: false,
})
// const play = useRef(false)
const minutesElement = useRef()
const secElement = useRef()
const intervalId = useRef(null)
const remainingTime = useRef(timer.sessionLength*60)
const displayedTimer = timer.turn === 'session'? timer.sessionLength<10? `0${timer.sessionLength}`: timer.sessionLength
                                                : timer.breakLength<10? `0${timer.breakLength}`:timer.breakLength
// console.log(minutesElement.current.innerHTML)
// if(intervalId.current) clearInterval(intervalId.current)
function handlePlayPauseClick(){
  // play.current = !play.current;
  setTimer(prev=>({
    ...prev,
    play: !prev.play
  }))
 
}
function handleResetClick(){
  setTimer(prev=>({
    ...prev,
    sessionLength: DEFAULT_SESSION,
    breakLength: DEFAULT_BREAK,
    play: false,
    reset: !prev.reset
    
  }))
}
useEffect(()=>{
console.log("inside effect "+minutesElement.current.innerHTML)
console.log("inside effect "+timer.play)

  
  if(timer.turn === 'session') {
    remainingTime.current = timer.sessionLength*60
    minutesElement.current.innerHTML = timer.sessionLength <10? `0${timer.sessionLength}`: timer.sessionLength
  }
  else {
    remainingTime.current = timer.breakLength*60
    minutesElement.current.innerHTML = timer.breakLength <10? `0${timer.breakLength}`:timer.breakLength
  }
  secElement.current.innerHTML = "00"
  clearInterval(intervalId.current)

  intervalId.current = setInterval(()=>{
    if(timer.play){
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
  secElement.current.innerHTML = sec < 10 ? `0${sec}`:sec}
    
  },1000)
},[timer.turn==='session'? timer.sessionLength:timer.breakLength,timer.turn,timer.reset])
useEffect(()=>{
  
    
    clearInterval(intervalId.current)
    intervalId.current = setInterval(()=>{
      if(timer.play){
        // clearInterval(intervalId.current)
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
    secElement.current.innerHTML = sec < 10 ? `0${sec}`:sec}
      
    },1000)
  
}, [timer.play])

 

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
          intervalId={intervalId}
          playState={timer.play}
          />
        <Params 
          id="session" 
          label="Session Length" 
          counter={timer.sessionLength} 
          intervalId={intervalId}
          updateCounter={setTimer}
          playState={timer.play}
          />
      </div>
      <div className='timer-container'>
        <h4 id='timer-label' className='timer-label'>
          {timer.turn==="session"? "Session":'Break'}
        </h4>
        <div id="time-left">
          <span className='minutes' ref={minutesElement}>{displayedTimer}</span>
          :
          <span className='seconds' ref={secElement}>{'00'}</span>
          <div className='controle-panel'>
           <button className='play-pause' onClick={handlePlayPauseClick}>
              <i className="fa fa-play fa-2x"></i>
              <i className="fa fa-pause fa-2x"/>
            </button>
           <button className='reset-btn' onClick={handleResetClick}><i className="fa fa-refresh fa-2x"></i></button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;

