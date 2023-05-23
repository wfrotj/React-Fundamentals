import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <h1>Notes</h1>
      <NoteList notes={notes} setNotes={setNotes} />
      <NoteForm notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
