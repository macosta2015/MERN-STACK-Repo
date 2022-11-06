const express = require('express')

const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

  //Fire the middleware so that they are authenticated
  //Require auth for all workout routes
  router.use(requireAuth) 

  // GET all workouts
  router.get('/', getWorkouts)
  
  // GET a single workout
  router.get('/:id', getWorkout)
  
  // POST a new workout
  router.post('/', createWorkout) //We have the refernece from above 
    // async (req, res) => {
    // const {title, load, reps} = req.body 

    // try {
    //   const workout = await Workout.create({title, load, reps})
    //   res.status(200).json(workout)
    // } catch (error) {
    //   res.status(400).json({error: error.message})
    // }
  // })
  
  // DELETE a workout
  router.delete('/:id', deleteWorkout)
  
  // UPDATE a workout
  router.patch('/:id', updateWorkout)

module.exports = router