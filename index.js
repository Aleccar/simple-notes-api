const express = require('express')
const notesRouter = require('./routes/notesRouter')
const { loggerMiddleware } = require('./middleware/logger')
require('dotenv').config()
const app = express()

app.use(express.json())

const PORT = process.env.PORT


// Here with initiate Logging middleware so that all calls to the API will log to console.
app.use(loggerMiddleware)

// Here we mount the Notes Router. 
app.use('/notes', notesRouter)

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })


// A get request that simply sends "Hello World!" to the user.
app.get('/', (req, res) => {
    res.send('Hello World!')
})

