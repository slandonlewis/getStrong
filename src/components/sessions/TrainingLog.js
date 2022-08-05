import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Session.css"

export const TrainingLog = () => {
    const [sessions, setSessions] = useState([])
    const [filteredSessions, setFiltered] = useState([])

    const localUser = localStorage.getItem("active_user")
    const localUserObject = JSON.parse(localUser)

    useEffect(
        () => {
            getAllSessions()
        },
        []
    )

    const getAllSessions = () => {
        fetch(`http://localhost:4000/sessions`)
            .then(response => response.json())
            .then((sessionArray) => {
                setSessions(sessionArray)
            })
    }

    useEffect(
        () => {
            const mySessions = sessions.filter(session => session.userId === localUserObject.id)
            setFiltered(mySessions)
        },
        [sessions]
    )

    const deleteSession = (session) => {
        fetch(`http://localhost:4000/sessions/${session.id}`, {
            method: "DELETE"
        })
            .then(() => {
                getAllSessions()
            })
    }

    const navigate = useNavigate()
    const viewSession = (session) => {
        navigate(`/sessions/${session.id}/exercises`)
    }


    return (
        <div className="training-log">
            <h1>Training Log</h1>
            <h3>View all of your logged sessions here</h3>

            <article className="sessions">
                {
                    filteredSessions.map(
                        (session) => {
                            return <section className="session">
                                <h3>{session.name}</h3>
                                <p>Date Created: {session.dateCompleted}</p>
                                <button onClick={() => viewSession(session)}>View</button>
                                <button onClick={() => deleteSession(session)}>🗑️</button>
                            </section>
                        }
                    )
                }
            </article>
        </div>
    )
}