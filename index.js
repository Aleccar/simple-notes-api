require('dotenv').config()
const express = require('express')
const notesRouter = require('./routes/notesRouter')
const { loggerMiddleware } = require('./middleware/logger')


const app = express()
const PORT = process.env.PORT || 2999


// Middleware
app.use(express.json())
app.use(loggerMiddleware)

//  Routes 
app.use('/notes', notesRouter)

// 404 Handler
app.use((req, res) => {
    res.status(404).json({error: 'route does not exist'})
});

// A simple get request.
app.get('/', (req, res) => {
    res.send('Hello World!')
})


// Start server
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })