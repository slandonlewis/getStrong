import { AdminViews } from "./AdminViews"
import { UserViews } from "./UserViews"

export const ApplicationViews = () => {
	
    const localUser = localStorage.getItem("active_user")
    const localUserObject = JSON.parse(localUser)

    if (localUserObject.isAdmin) {
        return <AdminViews />
    }
    else {
        return <UserViews />
    }
}