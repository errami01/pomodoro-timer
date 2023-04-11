import './App.css';
import { useState, useEffect, useRef} from 'react';
import Params from './Params';

function App() {
const [sessionDuration, setSessionDuration] = useState(1)
const [breakDuration , setBreakDuration] = useState(5)
const minutesElement = useRef()
const secElement = useRef()
const intervalId = useRef(null)
const targetMilliSec = new Date().getTime()+(sessionDuration*60*1000)
console.log(targetMilliSec)
if(intervalId.current) clearInterval(intervalId.current)
// function handleArrowClick(event, id, ){
//   if(event.currentTarget.id === `${id}-decrement`  && counter >0) {
//     clearInterval(intervalId)
//     updateCounter(prev=> prev-1)
//   }
//   if(event.currentTarget.id === `${id}-increment` && counter <60) updateCounter(prev=> prev+1)
// }
 intervalId.current = setInterval(()=>{
  const current = new Date().getTime()
  const distance = targetMilliSec - current 
  if( distance <= 0) {
    clearInterval(intervalId)
    return
  }
  const minutes = Math.floor(distance/(1000*60))
  const sec = Math.floor(distance%(1000*60)/1000)
  minutesElement.current.innerHTML = minutes <10? `0${minutes}`: minutes
  secElement.current.innerHTML = sec
  
},1000)
useEffect(()=>{
  
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

// const target= 9
// let remainingTime = target*60
// setInterval(()=>{
//     remainingTime --
//     const minutes = Math.floor(remainingTime/60);
//     const sec = remainingTime%60
//     console.log(`${minutes}:${sec}`)
//     // console.log(`${minutes}:${sec}`)
// }, 1000)