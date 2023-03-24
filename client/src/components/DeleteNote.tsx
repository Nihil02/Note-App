import { FaTrash } from "react-icons/fa";
import { useGetNotes, url } from "../hooks/useNotes";

function DeleteNote(id : any) {
  const [notes, setNotes] = useGetNotes();

  //Delete a specific note
  const deleteNote = async () => {
    try {
      const response = await fetch(url + "/" + id, {
        method: "DELETE",
      });

      console.log(response);
      
      //setNotes(notes.filter(note => note.note_id !== id));

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          if (window.confirm("Delete note?")) {
            deleteNote();
            console.log("Delete");
          }
        }}
        className="flex justify-center items-center w-8 h-8 rounded-md bg-red-400 hover:bg-red-500"
      >
        <FaTrash size={20} color="white" />
      </button>
    </>
  );
}

export default DeleteNote;
