import { Outlet, Route, Routes } from "react-router-dom"
// import { PlantContainer } from "../plants/PlantContainer"
// import { PlantList } from "../plants/PlantList"
export const ApplicationView = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>OnlyPlants</h1>
                    <div>Your one-stop-shop to get all your plants watered!</div>
                    <Outlet />
                </>
            }>
                <Route path="plants" element={ <PlantContainer/>} />
                <Route path="plants/create" element={ <PlantList /> } />
            </Route>
        </Routes>
    )
}