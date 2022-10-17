const express = require('express')

const {
  createWorkout,
  getWorkouts,
  getWorkout
} = require('../controllers/workoutController')


const router = express.Router()

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
  router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
  })
  
  // UPDATE a workout
  router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
  })

module.exports = router