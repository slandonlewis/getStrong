import { GetStrong } from "./components/GetStrong"
import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { Login } from "./components/auth/Login"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <Login />
    </BrowserRouter>
)
