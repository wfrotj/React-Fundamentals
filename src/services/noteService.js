import axios from "axios";

const baseUrl = "https://notes-api-o28r.onrender.com/api/notes";

function getNotes() {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
}

function createNote(newNote) {
  const request = axios.post(baseUrl, newNote);
  return request.then((response) => response.data);
}

function updateNote(id, updatedNote) {
  const request = axios.put(`${baseUrl}/${id}`, updatedNote);
  return request.then((response) => response.data);
}

function deleteNote(id) {
  return axios.delete(`${baseUrl}/${id}`);
}

export default {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};
