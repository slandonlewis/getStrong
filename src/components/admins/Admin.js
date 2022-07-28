import { Link } from "react-router-dom"

export const Admin = ({ id, name, email }) => {
    return <section className="admin">
    <div>
        <Link to={`/admins/${id}`}>Name: {name}</Link>
    </div>
    <div>Email: {email}</div>
</section>
}