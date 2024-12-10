import React, { useState } from 'react'

export default function Pomodoro() {

  const[workDuration,setWorkDuration]=useState(25) 
  const[breakDuration,setBreakDuration]=useState(5)
  const[worksecond,setWorkSecond]=useState(10)
  const[breaksecond,setBreakSecond]=useState(300)
  const[type,setType]=useState("Break")

  const formatSpecifier =(seconds)=>{
      let minute=parseInt(seconds/60).toString();
      let second=parseInt(seconds%60).toString();
      if (second.length===1) second="0"+second 
      if (minute.length===1) minute="0"+minute
      return minute+":"+second
  }


  
    return (
      <div>
        <div>
          <h1>{type=== "work"?formatSpecifier(worksecond):formatSpecifier(breaksecond)}</h1>
          <h1>{type=== "work"?"work":"break"}-Time</h1>

        </div>
        <div>
          <button>Start</button>
          <button>Stop</button>
          <button>Reset</button>
        </div>

        <div>
          <form><input type="number" placeholder='Enter Work Time' value={workDuration} onChange={(e)=>setWorkDuration(e.target.value)}/>
            <input type='number' onChange={(e)=>setBreakDuration(e.target.value)}placeholder='Enter Break Time' value={breakDuration}/>
            <input type="submit" value="Set" />

          </form>


        </div>

      </div>
    )
  }

