import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"

export const UserDetails = () => {
    const {userId} = useParams()
    const [user, updateUser] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:4000/users?_expand=user&userId=${userId}`)
            .then(response => response.json())
            .then((data) => {
                const singleUser = data[0]
                updateUser(singleUser)
            })
        },
        [userId]
    )

    return <section className="user">
        <header>{user?.user?.name}</header>
        <div>Email: {user?.user?.email}</div>
    </section>
}