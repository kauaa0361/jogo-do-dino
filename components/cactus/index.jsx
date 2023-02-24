import { useState,useEffect } from "react";

export function CactusComponent() {
  
  let randomPosition = parseInt(Math.random() * (4000 - 2000) + 2000)
  const [position, setPosition] = useState(randomPosition?randomPosition:1000)

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setPosition(pos => pos - 10)
    }, 20);
    return () => clearInterval(leftInterval)
  }, [])
    
  if (position <= -100) {
    setPosition(randomPosition)
  }


  return (
    <div className="absolute w-[60px] h-[50px] bottom-0 bg-red-500"
      style={{left: position + "px" }} />
  )
}

export function CreateCactus(Cactus,CactusNumber) {

  let cactusFile = [] 

  for (let i = 0; i <= CactusNumber; i++) {
    cactusFile.push((<Cactus key={i}/>))
  }
    return cactusFile
}