const express = require('express');
const { v4: uuidv4 } = require('uuid')

// Here we set up the notes router.
notesRouter = express.Router();

// notesRouter.use(express.json())

// TODO: Set up a utils middleware functions file to put all these into. In case more are needed.
const getIndexById = (id, elementList) => {
    return elementList.findIndex((element) => {
        return element.id === id
    });
};

// Here we create a temporary in-memory storage of notes, that will later be converted into a SQL database.
let notes = [];

notesRouter.get('/', (req, res) => {
    res.json(notes)
});

notesRouter.get('/:id', (req, res) => {
    const noteId = getIndexById(req.params.id, notes)

    console.log(req.params.id)
    console.log(noteId)

    if (noteId !== -1) {
        res.status(200).send(notes[noteId])
    } else {
        res.status(404).send({ "Error": "The note ID does not exist." })
    }
})

notesRouter.post('/', (req, res) => {
    const reqData = req.body.body; // double body here to only get the text from what we send in Postman. Can be removed later when we have SQL access and get ID from that.

    if (!reqData) {
        res.status(400).send({ "Error": "You need to add text to the note." })
    } else {
        const newData = {
            id: uuidv4(),
            body: reqData
        };

        notes.push(newData);
        res.status(201).send(newData);
    }
});

notesRouter.delete('/:id', (req, res) => {
    // We use the function that I created above to check if there is a note with the id in the notes array.
    const idToRemove = getIndexById(req.params.id, notes);

    // If a valid ID does not exist it will return -1, so we check for that and run the code that applies.
    if (idToRemove !== -1) {
        notes.splice(idToRemove, 1)
        res.sendStatus(204)
    } else {
        res.status(404).send({ "Error": "The note ID does not exist." })
    };
});



// Making sure to export the router from this file so we can later import it to the index.js file so that it is usable.
module.exports = notesRouter;