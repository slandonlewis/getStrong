import React, { useState, useRef, useEffect } from 'react';
import { ExerciseList } from './ExerciseList'
import { useLocation } from 'react-router-dom'

export default function Exercises() {
    // To load recent exercises, get exercises again
    const [exercises, setExercises] = useState([])
    const [allExercises, setAll] = useState([])
    const [inputName, setName] = useState('')
    const [inputWeight, setWeight] = useState(0)
    const [inputSets, setSets] = useState(0)
    const [inputReps, setReps] = useState(0)
    const location = useLocation()
    const sessionId = parseInt(location.pathname.split('/')[2])

    const getAllExistingExercises = () => {
        return fetch(`http://localhost:4000/exercises`)
            .then(response => response.json())
            .then((exercises) => {
                setAll(exercises)
            })
    }

    // const getAllExercisesForSession = () => {
    //     return fetch(`http://localhost:4000/sessions/${sessionId}/sessionExercises?_expand=exercise`)
    //         .then(response => response.json())
    //         .then((exercises) => {
    //             setExercises(exercises)
    //         })
    // }

    useEffect(
        () => {
            getAllExistingExercises()
        },
        []
    )

    useEffect(
        () => {
            const myExercises = allExercises.filter(exercise => exercise.sessionId === sessionId)
            setExercises(myExercises)
        },
        [allExercises]
    )

    const handleAddExercise = () => {
        // Only needs to have sessionId, save and post that object, get exercises back, display based on which sessionId 
        const exercisesToSendToAPI = {
            "sessionId": sessionId,
            "name": inputName,
            "load": inputWeight,
            "sets": inputSets,
            "reps": inputReps
        }

        return fetch(`http://localhost:4000/exercises`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(exercisesToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {getAllExistingExercises()})
    }

    // const updateExercises 

    return (
        <div className='exerciseDisplay'>
            <section className='inputFields'>
                <h3>Exercise Name:</h3>
                <input value={inputName} onInput={e => setName(e.target.value)} type="text" placeholder="Ex: Bench Press" size="30" />

                <h4>Weight</h4>
                <input value={inputWeight} onInput={e => setWeight(parseInt(e.target.value))} type="number" placeholder='Ex: 135 LBS' />

                <h4>Sets</h4>
                <input value={inputSets} onInput={e => setSets(parseInt(e.target.value))} type="number" placeholder='Ex: 4 Sets' />

                <h4>Reps</h4>
                <input value={inputReps} onInput={e => setReps(parseInt(e.target.value))} type="number" placeholder='Ex: 8 Reps' />
                <br></br>
                <button onClick={() => handleAddExercise()}>Add Exercise</button>
            </section>

            <section className='currentExercises'>
                <h3>Current Exercises</h3>
                <p>Exercises will be listed here</p>
                <ExerciseList exercises={exercises} sessionId={sessionId} />
            </section>
        </div>
    )
}
