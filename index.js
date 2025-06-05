const express = require('express')
const notesRouter = require('./routes/notesRouter')
const app = express()

app.use(express.json())

const PORT = 2999


// Logging middleware, will change position later when I figure that out.

app.use(logger = (req, res, next) => {
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time)
    next()
})

// Here we mount the Notes Router. 
app.use('/notes', notesRouter)

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })



app.get('/', (req, res) => {
    res.send('Hello World!')
})

