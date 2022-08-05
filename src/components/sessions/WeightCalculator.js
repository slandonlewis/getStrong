import React from 'react'
import { useState } from 'react'


export function WeightCalculator() {

  const [totalWeight, setTotalWeight] = useState(45)
  let [previousPlate, setPreviousPlate] = useState(0)
  let [plateArray, setPlateArray] = useState([])
  let [errorMsg, setErrorMsg] = useState('')
  
  const addWeight = (plate) => {
    plateArray.push(plate)
    previousPlate = plate
    const calculation = totalWeight + plate * 2
    setTotalWeight(calculation)
    setPreviousPlate(previousPlate)
    errorMsg = ''
    setErrorMsg(errorMsg)
    setPlateArray(plateArray)
  }

  const undoPrev = () => {
    if (totalWeight > 45) {
      // previous plate needs to match the last index of plateArray
      setPreviousPlate(plateArray[plateArray.length -1])
      let copy = [...plateArray]
      copy.pop()
      setPlateArray(copy)
      console.log(previousPlate)
      const calculation = totalWeight - previousPlate*2
      setTotalWeight(calculation)
      errorMsg = ''
      setErrorMsg(errorMsg)
    } else {
      errorMsg = 'There is no weight on the bar!'
      setErrorMsg(errorMsg)
    }
  }

  const clearBar = () => {
    if (totalWeight > 45) {
      errorMsg = ''
      setTotalWeight(45)
      setErrorMsg(errorMsg)
      setPlateArray([])
    } else {
      errorMsg = 'There is no weight on the bar!'
      setErrorMsg(errorMsg)
    }
  }
  return (
    <div className='calculatorPage'>
      <div>
        <h2>Weight Calculator</h2>
        <h3>Total Weight:</h3>
        <h4 className='load'>{totalWeight} LBS</h4>
        <h5 className='errorMsg'>{errorMsg}</h5>
      </div>
      <div className='buttonSelection'>
        <p>When plates are clicked, the value will be automatically
          doubled, since you normally add a plate on each
          side. Remember to load each side properly for safety!</p>
        <div className='plateSelect'>
          <button onClick={() => addWeight(45)}>45 LBS</button>
          <button onClick={() => addWeight(35)}>35 LBS</button>
          <button onClick={() => addWeight(25)}>25 LBS</button>
          <button onClick={() => addWeight(10)}>10 LBS</button>
          <button onClick={() => addWeight(5)}>5 LBS</button>
          <button onClick={() => addWeight(2.5)}>2.5 LBS</button>
        </div>
        <button onClick={() => undoPrev()}>UNDO</button>
        <button onClick={() => clearBar()}>CLEAR</button>

      </div>
    </div>
  )
}

