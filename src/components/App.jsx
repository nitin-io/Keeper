import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputArea from "./InputArea";
import { deleteNote, getNotes, saveNote } from "../utils/storage";
import { useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function handleSubmit(note) {
    if (!note.title || !note.content) {
      return;
    }
    note.key = Date.now()
    saveNote(note);
    setNotes((prevValues) => {
      return [...prevValues, note];
    });
  }

  function handleDelete(id) {
    deleteNote(id);
    setNotes(() => {
      return notes.filter((note) => {
        return note.key !== id;
      });
    });
  }

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  return (
    <div>
      <Header />
      <InputArea onAdd={handleSubmit} />
      {notes.map((note, index) => (
        <Note
          key={uuidv4()}
          id={note.key}
          title={note.title}
          content={note.content}
          delete={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
