import { useState } from "react";

//Server URL
const url = "http://localhost:5000/notes";

function AddNote() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  async function submitForm(e: any) {
    e.preventDefault();
    try {
      const body = { title, text };
      const response = await fetch(url, {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(body)
      });
      window.location.reload();
      
    } catch (error) {
      console.error(error);

    }
  }

  return (
    <>
      <form className="m-4 p-8" onSubmit={submitForm}>
        <div className="mb-6">
          <label htmlFor="note_title">Note Title</label>
          <input
            type="text"
            id="note_title"
            name="note_title"
            maxLength={100}
            className="note-text"
            value={title}
            placeholder="A magnificient title"
            onChange={e=> setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="note_text">Text</label>
          <textarea
            id="note_text"
            name="note_text"
            rows={3}
            className="note-text"
            value={text}
            placeholder="Something something..."
            onChange={e=> setText(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default AddNote;
