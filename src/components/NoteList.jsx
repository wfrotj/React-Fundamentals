import Note from "./Note";
import { useEffect } from "react";
import noteService from "../services/noteService";

function NoteList({ notes, setNotes }) {
  useEffect(() => {
    noteService
      .getNotes()
      .then((notes) => setNotes(notes))
      .catch((error) => console.log(error));
  }, [setNotes]);

  const toggleImportanceOf = (id) => {
    const note = notes.find((note) => note.id === id);
    const changedNote = {
      ...note,
      important: !note.important,
    };

    noteService
      .updateNote(id, changedNote)
      .then((updatedNote) =>
        setNotes(notes.map((note) => (note.id !== id ? note : updatedNote)))
      );
  };

  const deleteNote = (id) => {
    noteService
      .deleteNote(id)
      .then((_response) => setNotes(notes.filter((note) => note.id !== id)));
  };

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          toggleImportanceOf={toggleImportanceOf}
          deleteNote={deleteNote}
        />
      ))}
    </ul>
  );
}

export default NoteList;
