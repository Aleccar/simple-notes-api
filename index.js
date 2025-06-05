const express = require('express')
const notesRouter = require('./routes/notesRouter')
const { loggerMiddleware } = require('./middleware/logger')
const app = express()

app.use(express.json())

const PORT = 2999


// Logging middleware:
app.use(loggerMiddleware)

// Here we mount the Notes Router. 
app.use('/notes', notesRouter)

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })



app.get('/', (req, res) => {
    res.send('Hello World!')
})

