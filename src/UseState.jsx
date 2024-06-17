import { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
    <p>Clicked {count} times</p>
    <button onClick={()=> setCount(count + 1)} >
        Click Me
    </button>
      
    </div>
  )
}

export default UseState
