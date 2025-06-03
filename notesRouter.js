const express = require('express');

// Here we set up the notes router.
notesRouter = express.Router();

// notesRouter.use(express.json())

// TODO: Set up a utils middleware functions file to put all these into. In case more are needed.
const getIndexById = (id, elementList) => {
    return elementList.findIndex((element) => {
        return element.id === Number(id);
    });
};


// Here we create a temporary in-memory storage of notes, that will later be converted into a SQL database.
let notes = [];

// create a temorary unique id for each new item coming in by iterating on this by 1 each time a new thing is added.
let noteId = 1;

notesRouter.get('/', (req, res) => {
    res.json(notes)
});

notesRouter.get('/:id', (req, res) => {
    const noteId = getIndexById(req.params.id, notes)

    if (noteId !== -1) {
        res.status(200).send(notes[noteId])
    } else {
        res.sendStatus(404)
    }
})

notesRouter.post('/', (req, res) => {
    const reqData = req.body.body; // double body here to only get the text from what we send in Postman. Can be removed later when we have SQL access and get ID from that.
    const newData = {
        id: noteId++,
        body: reqData
    };

    notes.push(newData);
    res.status(201).send(newData);
});

notesRouter.delete('/:id', (req, res) => {
    // We use the function that I created above to check if there is a note with the id in the notes array.
    const idToRemove = getIndexById(req.params.id, notes);

    // If a valid ID does not exist it will return -1, so we check for that and run the code that applies.
    if (idToRemove !== -1) {
        notes.splice(idToRemove, 1)
        res.sendStatus(204)
    } else {
        res.sendStatus(404)
    };
});



// Making sure to export the router from this file so we can later import it to the index.js file so that it is usable.
module.exports = notesRouter;