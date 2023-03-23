import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

//Defines note structure
interface INotes {
  note_id: number;
  note_title: string;
  note_text: string;
}

//Server URL
const url = "http://localhost:5000/notes";

//Rendering notes
function NoteList() {
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

  //Delete a specific note
  const deleteNote = async (id: any) => {
    try {
      const response = await fetch(url + "/" + id, {
        method: "DELETE",
      });

      window.location.reload();

      setNotes(notes.filter((note: INotes) => note.note_id !== id));
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
      <table className="table m-5 w-full text-sm">
        <thead className="text-xl text-gray-900 text-center">
          <tr>
            <th>Title</th>
            <th>Text</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note: INotes) => (
            <tr key={note.note_id}>
              <th className="py-4 px-6 font-medium text-gray-700 text-center">
                {note.note_title}
              </th>
              <td className="py-4 px-6 whitespace-nowraps text-gray-500  text-left">
                {note.note_text}
              </td>
              <td className="items-center justify-center">
                {" "}
                <button
                  onClick={() => {
                    if (window.confirm("Delete note?")) {
                      deleteNote(note.note_id);
                    }
                  }}
                  className="flex justify-center items-center w-8 h-8 rounded-md bg-red-600 hover:rounded-lg"
                >
                  <FaTrash size={20} color="white" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default NoteList;
