# simple-notes-api

*A simple REST API for storing and managing notes.*

*Deployed on Render:*  
https://simple-notes-api-497p.onrender.com

---

## Features: 
GET /notes - Returns all notes.
GET /notes/:id - Returns a note with a specified ID.
POST /notes - Adds a note to the note list.
DELETE /notes/:id - Deletes a note with a specified ID.

---

## Tech Stack:
Node.js
Express.js
Postman (For testing purposes)

---

## Installation:
```
git clone https://github.com/Aleccar/simple-notes-api
cd simple-notes-api
npm install
npm start
```


## Lessons Learned: 
The reason I am building this project is to learn the stages for making and deploying a simple REST API. 

I have found that the best way to learn is by doing. Setting up a middleware function and connecting it properly even when it's in a separate folder is one thing I found very useful to know. 
That way we have a separation of concerns in the file and folder structure. Also setting up a route so that all /Notes calls are funneled through the notesRouter. Instead of going through the index.js file.

Deploying it to Render was also an unforseen difficulty for me. I have never deployed an API before, so going through that process was challenging but rewarding. 