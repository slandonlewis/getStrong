import { useState } from "react"
import { Route, useNavigate, Routes } from "react-router-dom"
import Exercises from "./Exercises.js"


export const NewSession = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [session, update] = useState({
        name: ''
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the session list
    */
    const navigate = useNavigate()

    const localUser = localStorage.getItem("active_user")
    const localUserObject = JSON.parse(localUser)

    const handleCreateButtonClick = (event) => {
        event.preventDefault()
        // TODO: Create the object to be saved to the API
        const current = new Date()
        const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`
        const sessionToSendToAPI = {
            userId: localUserObject.id,
            name: session.name,
            dateCompleted: date
        }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:4000/sessions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sessionToSendToAPI)
        })
            .then(response => response.json())
            .then((response) => {

                navigate(`/sessions/${response.id}/exercises`)
            })
    }

    return (
        <>
            <form className="sessionForm">
                <h2 className="sessionForm__title">New Session</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="session-name">Session Name: </label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Ex: Chest Day"
                            value={session.name}
                            onChange={
                                (evt) => {
                                    const copy = { ...session }
                                    copy.name = evt.target.value
                                    update(copy)
                                }
                            } />
                    </div>
                </fieldset>


                <button
                    onClick={(clickEvent) => handleCreateButtonClick(clickEvent)}
                    className="btn btn-primary">
                    CREATE SESSION
                </button>
            </form>
        </>
    )
}