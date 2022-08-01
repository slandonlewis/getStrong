import { AdminNav } from "./AdminNav"
import { UserNav } from "./UserNav"
import "./NavBar.css"

export const NavBar = () => {
    // const localUser = localStorage.getItem("active_user")
    // const localUserObject = JSON.parse(localUser)

    // // if (localUserObject.admin) {
    // //     return <AdminNav />
    // // }
    // // else {
    // //     return <UserNav />
    // // }
    return <UserNav />
}

