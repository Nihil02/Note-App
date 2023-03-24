import { useGetNotes } from "./../hooks/useNotes";
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

  const renderNotes = () => {
    return notes.map((note: INotes) => {
      return (
        <div className="max-w-sm min-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{note.note_title}</div>
            <p className="text-gray-700 text-base">{note.note_text}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block">
              <DeleteNote id={note.note_id} />
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Edit
            </span>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="flex">{renderNotes()}</div>
    </>
  );
}

/*
      <table className="table m-5 w-full text-sm">
        <thead className="text-xl text-gray-900 text-center">
          <tr>
            <th>Title</th>
            <th>Text</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </table>
<tr key={note.note_id}>
                <th className="py-4 px-6 font-medium text-gray-700 text-center">
                  {note.note_title}
                </th>
                <td className="py-4 px-6 whitespace-nowraps text-gray-500  text-left">
                  {note.note_text}
                </td>
                <td className="items-center justify-center">
                  {" "}
                  />
                </td>
              </tr>
*/

export default NoteList;
