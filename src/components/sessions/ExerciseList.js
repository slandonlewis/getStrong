import React from 'react'
import Exercise from './Exercise'

export default function ExerciseList({ exercises }) {
    return (
        exercises.map(exercise => {
            return <Exercise key={exercise} exercise={exercise} />
        })
    )
}
