import { Link } from "react-router-dom"

export const User = ({ id, name, email }) => {
    return <section className="user">
    <div>
        <Link to={`/users/${id}`}>Name: {name}</Link>
    </div>
    <div>Email: {email}</div>
</section>
}