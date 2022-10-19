import { useEffect, useState } from "react"

//components
import WorkoutDetails from '../components/WorkoutDetails'

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkputs = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok){
                setWorkouts(json)
            }
        }

        fetchWorkputs()
    }, [])

    return (
        <div className="home">
            <div classname="workouts">
                {workouts && workouts.map((workout) =>(
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>                    
        </div>
    )
}

export default Home