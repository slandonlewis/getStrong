import React from 'react'
import Exercise from './Exercise'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'


export const ExerciseList = ({ exercises, sessionId }) => {
    const [allExercises, setAll] = useState([])

    const getAllExistingExercises = () => {
        return fetch(`http://localhost:4000/exercises`)
            .then(response => response.json())
            .then((exercises) => {
                setAll(exercises)
            })
    }

    useEffect(
        () => {
            getAllExistingExercises()
        },
        []
    )
    return (
        exercises.map(exercise => {
            return <Exercise key={exercise.name} exercise={exercise} sessionId={sessionId} />
        })
    )
}
