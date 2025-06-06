const express = require('express')
const notesRouter = require('./routes/notesRouter')
const { loggerMiddleware } = require('./middleware/logger')
require('dotenv').config()
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 2999


// Here with initiate Logging middleware so that all calls to the API will log to console.
app.use(loggerMiddleware)

// Here we mount the Notes Router. 
app.use('/notes', notesRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use((req, res) => {
    res.status(404).json({error: 'route does not exist'})
});


app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })