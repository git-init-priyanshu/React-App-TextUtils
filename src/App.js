import './App.css';
import Navbar from "./MyComponents/Navbar"
import Body from "./MyComponents/Body"
import React, {useState} from 'react'

function App() {

  const [mode, setMode] = useState("light")

  let funToggleMode = ()=>{
      console.log("toogle")
      if(mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor = "rgb(3 0 24 / 90%)";
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = "White";
      }
  }
  return (
    <>
    <Navbar title="Text Utils" mode={mode} toggle={() => funToggleMode()}/>
    <Body mode={mode}/>
    </>
  );
}

export default App;
