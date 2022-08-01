import { Link, useNavigate, Route, Routes } from "react-router-dom"
import "./NavBar.css"
import "../GetStrong.css"
import logo from './logo.png'

// const navbarLinks = document.querySelector('.navbar')

export const UserNav = () => {
    const navigate = useNavigate()
    // const navbarLinks = document.querySelector('.navbar')
    return (
        <nav className="nav">
            <div>
                <img src={logo} className="logoNavStyle"></img>
            </div>

            <a href="#" className="toggle-btn" onClick={
                () => {
                    const navbarLinks = document.getElementsByClassName('navbar')
                    navbarLinks.classList.toggle('hide')
                }
            }>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>

            <ul id="navbar" className="hide">
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/">Dashboard</Link>
                </li>

                <li className="navbar__item active">
                    <Link className="navbar__link" to="/calc">Weight Calculator</Link>
                </li>

                {
                    localStorage.getItem("active_user")
                        ? <li className="navbar__item navbar__logout">
                            <Link className="navbar__link" to="" onClick={() => {
                                localStorage.removeItem("active_user")
                                navigate("/", { replace: true })
                            }}>Logout</Link>
                        </li>
                        : ""
                }
            </ul>
        </nav>
    )
}

