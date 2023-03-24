import { FaTrash } from "react-icons/fa";
import { useGetNotes, url } from "../hooks/useNotes";

function DeleteNote(id : any) {
  const [notes] = useGetNotes();

  //Delete a specific note
  const deleteNote = async () => {
    try {
      await fetch(url + "/" + id, {
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
