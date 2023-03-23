import express from "express";
import cors from "cors";
const pool = require("./db");

const app = express();
const port = 5000;

app.use(cors())
app.use(express.json());

//Routing
//Get all notes
app.get("/notes", async (req, res) => {
  try {
    const notes = await pool.query("SELECT * FROM notes;");
    res.json(notes.rows);
  } catch (error) {
    console.error(error);
  }
});

//Get a specific note
app.get("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const showNote = await pool.query(
      "SELECT * FROM notes WHERE note_id = ($1);",
      [id]
    );

    res.json(showNote.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

//Post a new note
app.post("/notes", async (req, res) => {
  try {
    const noteTitle = req.body.title;
    const noteText = req.body.text;

    const newNote = await pool.query("CALL new_note ($1,$2);", [
      noteTitle,
      noteText,
    ]);

    res.json(newNote);
  } catch (error) {
    console.error(error);
  }
});

//Update an existing note
app.put("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const changeNote = await pool.query("CALL change_note ($1);", [id]);

    res.json(changeNote);
  } catch (error) {
    console.error(error);
  }
});

//Delete a specific note
app.delete("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteNote = await pool.query("CALL delete_note ($1);", [id]);

    res.json(deleteNote);
  } catch (error) {
    console.error(error);
  }
});

//Start server
app.listen(port, () => {
  console.log("Running in " + port);
});
