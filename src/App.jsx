import { useState } from 'react'
import { motion } from "framer-motion";
import './App.css'
import clouds from "./assets/clouds.mp4"
import { FirstWindow } from './components/firstWindow';

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  

  return (
    <>
    <video autoPlay={true} loop={true} muted={true} playsInline={true} className='back-video'>
      <source src={clouds} type='video/mp4'/>
    </video>    
    {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    <FirstWindow/>
    </>
  )
}

export default App
