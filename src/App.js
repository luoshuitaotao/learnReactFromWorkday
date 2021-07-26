import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [emotion,setEmotion]= useState("happy");
  const [secondary, setSecondary] = useState("tired");

useEffect(()=>{
  console.log(`It's ${emotion} around here!`);
},[emotion]);
useEffect(()=>{
  console.log(`It's ${secondary} around here!`);
},[secondary]);

  return(
    <>
    <h1>Currently emtion is {emotion} and {secondary}.</h1>
    <button onClick={ ()=> setEmotion("Frustrated") }>Make Frustrate</button>
    <button onClick={ ()=> setEmotion("Enthusiastic") }>Make Enthusiastic</button>
    <button onClick={ ()=> setEmotion("Happy") }>Make Happy</button>
    <button onClick={ ()=> setSecondary("crabby") }>Make Crabby</button>

    </>
  )
}



export default App;