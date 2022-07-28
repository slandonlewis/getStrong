import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"
import logo from './logo.png'

export const Login = () => {
    const [email, set] = useState("slandonlewis@gmail.com")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:4000/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("active_user", JSON.stringify({
                        id: user.id
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <img src={logo} className="logo" alt="GetStrong"></img>
                    <div>
                        <label htmlFor="inputEmail"> <b>Log In:</b> </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Enter Email..."
                            required autoFocus />
                    </div>

                    <div>
                        <button type="submit">
                            SIGN IN
                        </button>
                    </div>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Create New User</Link>
            </section>
        </main>
    )
}

