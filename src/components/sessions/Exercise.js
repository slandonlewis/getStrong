import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Exercise({ exercise }) {
  const [allExercises, setAll] = useState([])
  const location = useLocation()
  const sessionID = parseInt(location.pathname.split('/')[2])

  
  useEffect(
    () => {
      getAllExistingExercises()
    },
    []
    )

    const getAllExistingExercises = () => {
      return fetch(`http://localhost:4000/exercises`)
        .then(response => response.json())
        .then((exercises) => {
          setAll(exercises)
        })
    }

  const deleteExercise = (exercise) => {
    return fetch(`http://localhost:4000/exercises/${exercise.id}`, {
      method: "DELETE"
    })
      .then(() => {
        getAllExistingExercises()
      })
      .then(()=> {
        window.location.reload()
      })
  }
  return (
    <>
      {exercise &&
        exercise.sessionId === sessionID ?
        <p className='lift'><b>{exercise.name}:</b> {exercise.load} LBS - {exercise.sets} x {exercise.reps} , <i>Type: {exercise.type}</i> <button onClick={() => deleteExercise(exercise)}>🗑️</button>
        </p>
        : ''
      }
    </>
  )
}
