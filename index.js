const express = require('express')
const notesRouter = require('./notesRouter')
const app = express()

app.use(express.json())

const PORT = 2999

// Here we mount the Notes Router. 
app.use('/notes', notesRouter)

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })



app.get('/', (req, res) => {
    res.send('Hello World!')
})

