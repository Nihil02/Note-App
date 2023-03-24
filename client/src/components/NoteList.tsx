import { useGetNotes, url } from "./../hooks/useNotes";
import DeleteNote from "./DeleteNote";

//Defines note structure
interface INotes {
  note_id: number;
  note_title: string;
  note_text: string;
}

//Rendering notes
function NoteList() {
  const [notes] = useGetNotes();

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
          {notes &&
            notes.map((note: INotes) => (
              <tr key={note.note_id}>
                <th className="py-4 px-6 font-medium text-gray-700 text-center">
                  {note.note_title}
                </th>
                <td className="py-4 px-6 whitespace-nowraps text-gray-500  text-left">
                  {note.note_text}
                </td>
                <td className="items-center justify-center">
                  {" "}
                  <DeleteNote/>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default NoteList;
