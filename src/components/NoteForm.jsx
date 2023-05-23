import { useState } from "react";
import noteService from "../services/notes";

function NoteForm({ notes, setNotes }) {
  const [newNote, setNewNote] = useState("");

  const addNote = (event) => {
    event.preventDefault();

    const noteObject = {
      content: newNote,
      important: false,
      id: notes.length + 1,
    };

    noteService
      .createNote(noteObject)
      .then((response) => {
        setNotes([...notes, response.data]);
        setNewNote("");
      })
      .catch((error) => console.log(error));
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  return (
    <form onSubmit={addNote}>
      <input type="text" value={newNote} onChange={handleNoteChange} />
      <button type="submit">save</button>
    </form>
  );
}

export default NoteForm;
