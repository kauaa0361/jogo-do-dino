import { useContext, useState } from "react"
import { Dino } from "../dino"

export function Button() {  

  const [count, setCount] = useState(false)
  return (
    <div>
      {count == true? <Dino/> : <></>}
      <button onClick={() => setCount(count == false ? true : false)}>clique aqui {count}</button>
    </div>
  )
}