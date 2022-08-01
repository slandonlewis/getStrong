import React from 'react'
import { useState } from 'react'


export function WeightCalculator() {
  const [totalWeight, setTotalWeight] = useState(45)
  const addWeight = (plate) => {
    // REMINDER: change 45 to actual bar weight
    const calculation = totalWeight + plate * 2
    setTotalWeight(calculation)
  }
  return (
    <>
      <div>
        <h2>Weight Calculator</h2>
        <h3>Total Weight:</h3>
        <h4 className='load'>{totalWeight} LBS</h4>
      </div>
      <div className='platesSelection'>
        <p>When plates are clicked, the value will be automatically
          doubled, since you normally add two of each plate on each
          side. Remember to load each side properly for safety!</p>
        <button onClick={() => addWeight(45)}>45 LBS</button>
        <button onClick={() => addWeight(35)}>35 LBS</button>
        <button onClick={() => addWeight(25)}>25 LBS</button>
        <button onClick={() => addWeight(10)}>10 LBS</button>
        <button onClick={() => addWeight(5)}>5 LBS</button>
        <button onClick={() => addWeight(2.5)}>2.5 LBS</button>
      </div>
    </>
  )
}

