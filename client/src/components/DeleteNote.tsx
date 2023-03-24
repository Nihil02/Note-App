import { FaTrash } from "react-icons/fa";
import { url } from "./../config";

function DeleteNote(note_id : any) {
  //Delete a specific note
  const deleteNote = async () => {
    try {
      console.log(url + "/" + note_id.id);
      
      const response = await fetch(url + "/" + note_id.id, {
        method: "DELETE",
      });

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
