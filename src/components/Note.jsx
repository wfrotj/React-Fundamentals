function Note({ note, toggleImportanceOf, deleteNote }) {
  const label = note.important ? "make not important" : "make important";

  return (
    <li>
      {note.content}{" "}
      <button onClick={() => toggleImportanceOf(note.id)}>{label}</button>
      <button onClick={() => deleteNote(note.id)}>delete</button>
    </li>
  );
}

export default Note;
