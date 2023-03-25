import { useGetNotes } from "./../hooks/useNotes";
import AddNote from "./AddNote";
import DeleteNote from "./DeleteNote";
import EditNote from "./EditNote";
import ViewNote from "./ViewNote";

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
        <div className="group card">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{note.note_title}</div>
            <p className="text-gray-700 text-base overflow-hidden truncate">
              {note.note_text}
            </p>
          </div>
          <div className="flex flex-rows px-6 pt-4 pb-2 gap-x-10 justify-center">
            <span className="inline-block">
              <ViewNote
                note_text={note.note_text}
                note_title={note.note_title}
              />
            </span>
            <span className="inline-block">
              <EditNote
                note_id={note.note_id}
                note_text={note.note_text}
                note_title={note.note_title}
              />
            </span>
            <span className="inline-block">
              <DeleteNote id={note.note_id} />
            </span>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 xs:grid-cols-1 gap-y-10 gap-x-6 h-96">
        <AddNote />
        {renderNotes()}
      </div>
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
