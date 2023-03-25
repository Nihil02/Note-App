import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";

function App() {
  return (
    <>
      <h1 className="text-center text-3xl m-10">Note App</h1>
      <div className="px-10 py-5">
        <NoteList />
      </div>
    </>
  );
}

export default App;
