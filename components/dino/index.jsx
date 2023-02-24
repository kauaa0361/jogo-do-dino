import { useState } from "react";

export function Dino() {

  const [dinoPosition, setDinoPosition] = useState('0px')
  const [isJumping, setIsJumping] = useState(false)

  function handleKeyUp(event) {
    if(event.keyCode === 32 && !isJumping) {
      jump()
    }
  }

  function jump() {
    let position = 0;
    setIsJumping(true)
    let upInterval = setInterval(() => {
      if (position >= 200) {
        clearInterval(upInterval)
        let downInterval = setInterval(() => {
          if (position == 0) {
            setIsJumping(false)
            clearInterval(downInterval)
          } else {
            position -= 20;
            setDinoPosition(position+"px")
          }
        }, 20);
      } else {
        position += 20;
        setDinoPosition(position+"px")
      }
    }, 20);
  } 

  return(
    <button className= "absolute w-[60px] h-[60px] bg-sky-500 left-40"
    onKeyUp={handleKeyUp}
    style={{ bottom: dinoPosition }}
  />
  )
}