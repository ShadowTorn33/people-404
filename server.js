// initializing .env variables
require('dotenv').config()

const cors = require('cors')

const morgan = require('morgan')

// pull PORT from .env and give default value of 4000 and establish DB connection
const { PORT, MONGODB_URI } = process.env

//Import express
const express = require('express')

//Create application object
const app = express()

const { peopleController } = require('./controllers')
require('./config/db.connection')

// MIDDLE WARE
app.use(express.json()) //have this above controller middleware
app.use(cors())
app.use(morgan('dev'))
app.use('/people', peopleController)
// Error handling middleware
app.use((error, req, res, next) => res.status(500).send(error))

//Create a test route
app.get('/', (req,res) => {
    res.send('Hello World.')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})