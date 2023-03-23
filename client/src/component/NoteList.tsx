import { useEffect, useState } from "react";

//Defines note structure
interface INotes{
  note_id: number,
  note_title: string,
  note_text: string
}

//Rendering notes
function NoteList() {
  const url = "http://localhost:5000/notes"
  const [notes, setNotes] = useState([]);

  //Get all notes from server
  const getNotes = async () => {
    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      console.log(data);
      
      setNotes(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Texto</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note : INotes) => (
            <tr key={note.note_id}>
              <td>{note.note_title}</td>
              <td>{note.note_text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default NoteList;
