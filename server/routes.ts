const pool = require("./db");
import { Router } from "express";

const router = Router();

//Routing
//Get all notes
router.get("/notes", async (req, res) => {
  try {
    const notes = await pool.query("SELECT * FROM notes;");
    res.json(notes.rows);
  } catch (error) {
    console.error(error);
  }
});

//Get a specific note
router.get("/notes/:id", async (req, res) => {
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
router.post("/notes", async (req, res) => {
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
router.put("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const noteTitle = req.body.title;
    const noteText = req.body.text;

    console.log(id, noteTitle, noteText);

    const changeNote = await pool.query("CALL change_note ($1, $2, $3);", [id, noteTitle, noteText]);

    res.json(changeNote);
  } catch (error) {
    console.error(error);
  }
});

//Delete a specific note
router.delete("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteNote = await pool.query("CALL delete_note ($1);", [Number(id)]);

    res.json(deleteNote);
  } catch (error) {
    console.error(error);
  }
});

export default router;
