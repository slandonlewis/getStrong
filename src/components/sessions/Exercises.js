import React, { useState, useRef } from 'react';
import ExerciseList from './ExerciseList'

export default function Exercises() {
    const [exercises, setExercises] = useState([])
    const [input, setInput] = useState('')

    function handleAddLift(e) {
        const name = input
        if (name === '') return
        console.log(name)
    }

        return (
            <>
                <ExerciseList exercises={exercises} />
                <input value={input} onInput={e => setInput(e.target.value)} type="text" placeholder="Ex: Bench Press - 205 lbs 4x6" size="30" />
                <button onClick={handleAddLift}>Add Exercise</button>
                <button>Clear</button>
            </>
        )
}
