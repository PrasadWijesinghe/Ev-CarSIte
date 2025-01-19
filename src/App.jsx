import Background from "./Components/Background/Background";
import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {

  let heroData = [
    {text1:"Dive into", text2:"What you love"},
    {text1:"Indulge" , text2:"your passions"},
    {text1:"Give in to" , text2:"your passions"},
  ]

  const[heroCount, setHeroCount] = useState(0);
  const[playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background setPlayStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
    </div>
  )
}

export default App
