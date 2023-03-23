import express from "express";
const pool = require("./db");
const app = express();

app.use(express.json());

app.post("/notes", async (req, res) => {
  try {
    const noteTitle = req.body.note_title;
    const noteText = req.body.note_text;
    const newNote = await pool.query("CALL new_note ($1,$2)", [
      noteTitle,
      noteText,
    ]);
    res.json(newNote);
  } catch (error) {
    console.error(error);
  }
});

const port = 5000;

app.listen(port, () => {
  console.log("Running in " + port);
});
