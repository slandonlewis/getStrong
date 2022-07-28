import { Link, Outlet, Route, Routes } from "react-router-dom"
import { NewSession } from '../sessions/NewSession'
import { TrainingLog } from "../sessions/TrainingLog"

export const UserViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Dashboard</h1>
                    <Link to="/newsession"><button>New Session</button></Link>
                    <Link to="/traininglog"><button>Training Log</button></Link>

                    <Outlet />
                </>
            }>

            </Route>
                <Route path="newsession" element={ <NewSession /> } />
                <Route path="traininglog" element={ <TrainingLog /> } />
        </Routes>
    )
}