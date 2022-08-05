import { UserViews } from "./UserViews"

export const ApplicationViews = () => {
	
    const localUser = localStorage.getItem("active_user")
    const localUserObject = JSON.parse(localUser)
    return <UserViews />
}