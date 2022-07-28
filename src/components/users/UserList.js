import { useEffect, useState } from "react"
import { User } from "./User"


export const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(
        () => {
            fetch (`http://localhost:4000/users?isAdmin=false`)
                .then(response => response.json())
                .then((userArray) => {
                    setUsers(userArray)
                })
        }
    )

    return <article className="users">
        {
            users.map(user => <User key={`user--${user.id}`} 
                id={user.id} 
                name={user.name} 
                email={user.email} />)
        }
    </article>


}