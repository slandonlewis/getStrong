import { Link, Outlet, Route, Routes, useParams } from "react-router-dom"
import { NewSession } from '../sessions/NewSession'
import { TrainingLog } from "../sessions/TrainingLog"
import "../GetStrong.css"
import { WeightCalculator } from "../sessions/WeightCalculator"
import Exercises from "../sessions/Exercises"

export const UserViews = () => {
    // const Exercises = () => {
    //     let { sessionId } = useParams()
    // } 
    const {id} = useParams()
    return (
        <Routes>
            <Route path="/" element={
                <div className="dashboard">
                    <h1>Dashboard</h1>
                    <Link to="/newsession"><button>New Session</button></Link>
                    <Link to="/traininglog"><button>Training Log</button></Link>

                    <Outlet />
                </div>
            }>

            </Route>
            <Route path="newsession" element={<NewSession />} />
            <Route path="traininglog" element={<TrainingLog />} />
            <Route path="calc" element={<WeightCalculator />} />
            <Route path="sessions/:id/exercises" element={<Exercises id={id}/>} />
        </Routes>
    )
}