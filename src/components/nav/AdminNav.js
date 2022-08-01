import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const AdminNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">

            {
                localStorage.getItem("active_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("active_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}

