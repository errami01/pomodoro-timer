import './App.css'
import { useState, useEffect, useRef} from 'react'
import Params from './Params'

function App() {
// const [sessionDuration, setSessionDuration] = useState(1)
// const [breakDuration , setBreakDuration] = useState(5)
const DEFAULT_SESSION = 25
const DEFAULT_BREAK = 5
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
const beep = useRef()
const timerLabel = timer.turn==="session"? "Session":"Break"
const displayedTimer = timer.turn === 'session'? timer.sessionLength<10? `0${timer.sessionLength}`: timer.sessionLength
                                                : timer.breakLength<10? `0${timer.breakLength}`:timer.breakLength
// console.log(minutesElement.current.innerHTML)
// if(intervalId.current) clearInterval(intervalId.current)
// if(remainingTime <=0){
//   beep.current.play()
// }
function handlePlayPauseClick(){
  // play.current = !play.current;
  
  setTimer(prev=>({
    ...prev,
    play: !prev.play
  }))
 
}
function handleResetClick(){
  beep.current.pause()
  beep.current.currentTime = 0
  setTimer(prev=>({
    ...prev,
    turn: 'session',
    sessionLength: DEFAULT_SESSION,
    breakLength: DEFAULT_BREAK,
    play: false,
    reset: !prev.reset
    
  }))
}
useEffect(()=>{
  // beep.current.play()
  clearInterval(intervalId.current)
  if(timer.sessionLength <0 ){
    setTimer(prev=>({
      ...prev,
      sessionLength: 1
    }))
  }
  if(timer.turn === 'session') {
    remainingTime.current = timer.sessionLength*60
    minutesElement.current.innerHTML = timer.sessionLength <10? `0${timer.sessionLength}:00`: timer.sessionLength+':00'
  }
  else {
    remainingTime.current = timer.breakLength*60
    minutesElement.current.innerHTML = timer.breakLength <10? `0${timer.breakLength}:00`: timer.breakLength+':00'
  }
  // secElement.current.innerHTML = "00"
  

  intervalId.current = setInterval(()=>{
    if(timer.play){
      if( remainingTime.current == 0) {
        beep.current.play()
        setTimer(prev=>({
          ...prev,
          turn: prev.turn==='session'? 'break':'session'
        }))
        clearInterval(intervalId.current)
        return
    }
  remainingTime.current = remainingTime.current -1
  const minutes = Math.floor(remainingTime.current/60);
  const sec = remainingTime.current%60
  const minuteToDisplay = (minutes <10? `0${minutes}`: minutes)
  const secToDisplay= (sec < 10 ? `0${sec}`:sec)
  minutesElement.current.innerHTML = minuteToDisplay+`:`+secToDisplay
  // minutesElement.current.innerHTML = minutes <10? `0${minutes}`: minutes 
  // secElement.current.innerHTML = sec < 10 ? `0${sec}`:sec
}
    
  },100)
},[timer.turn==='session'? timer.sessionLength:timer.breakLength,timer.turn,timer.reset])
useEffect(()=>{
  
    
    clearInterval(intervalId.current)
    if(timer.sessionLength <0 ){
      setTimer(prev=>({
        ...prev,
        sessionLength: 1
      }))
    }
    intervalId.current = setInterval(()=>{
      if(timer.play){
        // clearInterval(intervalId.current)
        if( remainingTime.current == 0) {
          beep.current.play()
          setTimer(prev=>({
            ...prev,
            turn: prev.turn==='session'? 'break':'session'
          }))
          clearInterval(intervalId.current)
          return
      }
    remainingTime.current = remainingTime.current -1
    const minutes = Math.floor(remainingTime.current/60);
    const sec = remainingTime.current%60
    // minutesElement.current.innerHTML = minutes <10? `0${minutes}`: minutes
    // secElement.current.innerHTML = sec < 10 ? `0${sec}`:sec
    const minuteToDisplay = (minutes <10? `0${minutes}`: minutes)
    const secToDisplay= (sec < 10 ? `0${sec}`:sec)
    minutesElement.current.innerHTML = minuteToDisplay+`:`+secToDisplay

  }
      
    },100)
  
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
      <div className='timer-container-div'>
        <h4 id='timer-label' className='timer-label-h2'>
          {timerLabel}
        </h4>
        <div id="time-left" className='time-left'>
          <span className='minutes' ref={minutesElement}>{`${displayedTimer}:00`}</span>
          
          {/* <span className='seconds' ref={secElement}>{'00'}</span> */}
        </div>
        </div>
          <div className='controle-panel'>
           <button id="start_stop" className='play-pause' onClick={handlePlayPauseClick}>
              <i className="fa fa-play fa-2x"></i>
              <i className="fa fa-pause fa-2x"/>
            </button>
           <button id="reset" className='reset-btn' onClick={handleResetClick}><i className="fa fa-refresh fa-2x"></i></button>
           <audio ref={beep} id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
          </div>
        
      
      
    </div>
  );
}

export default App;

