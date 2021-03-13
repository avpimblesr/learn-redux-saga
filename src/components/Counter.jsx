import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div style={{ backgroundColor: 'lightgray' }}>
      <h3>{`Count: ${count}`}</h3>
      <div style={{ display: 'flex', justifyContent:'center'}}>
        <button onClick={decrement}> Decrement</button>&nbsp;
        <button onClick={increment}> Increment</button>
      </div>
    </div>
  )
}

export default Counter
