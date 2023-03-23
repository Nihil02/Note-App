import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";

function App() {
  return (
    <div className="p-10">
      <h1 className="text-center text-3xl">Note App</h1>
      <AddNote />
      <hr />
      <NoteList />
    </div>
  );
}

export default App;
