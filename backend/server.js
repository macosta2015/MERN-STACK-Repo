require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect( process.env.MONG_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port 💻  🚀 👽', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

  //USERS

    //user: paloma2016@my.fit.edu
    //password: ABCabc123$

    //user: mario2025@gmail.com
    //password: ElonMusk2050!@

  