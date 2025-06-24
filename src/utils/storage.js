function setNotes(notes) {
  try {
    localStorage.setItem("notes", JSON.stringify(notes));
    return notes;
  } catch {
    console.error("CustomStorageError: Not able to save")
    return false;
  }
}

export function getNotes() {
  try {
    return JSON.parse(localStorage.getItem("notes")) || []
  } catch {
    console.error("CustomStorageError: Not able to fetch notes.")
    return [];
  }
}

export function saveNote(note) {
  const notes = getNotes();
  notes.push(note);
  return setNotes(notes);
}

export function deleteNote(key) {
  const notes = getNotes();
  const _notes = notes.filter(note => note.key !== key)
  return setNotes(_notes)
}
