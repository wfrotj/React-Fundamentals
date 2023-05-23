import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

function getAllNotes() {
  return axios.get(baseUrl);
}

function createNote(newNote) {
  return axios.post(baseUrl, newNote);
}

function updateNote(id, newNote) {
  return axios.put(`${baseUrl}/${id}`, newNote);
}

function deleteNote(id) {
  return axios.delete(`${baseUrl}/${id}`);
}

export default {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
};
