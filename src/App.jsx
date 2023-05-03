import { useState,useEffect } from 'react'
 
import './App.css'

function App() {
 const [hello,sethello]=useState(false);

  useEffect(()=>{
console.log("components mounted!!");
  },[] )
  useEffect(()=>{
console.log("components updated!!");
  },[hello,sethello] );


  

  return (
    <>
     <button onClick={()=>{
sethello(!hello);
     }}
     >press</button>
    </>
  )
}

export default App
