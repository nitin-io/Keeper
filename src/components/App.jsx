import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputArea from "./InputArea";

function App() {
  const [notes, setNotes] = useState([]);

  function handleSubmit(note) {
    setNotes((prevValues) => {
      return [...prevValues, note];
    });
  }

  function handleDelete(id){
    setNotes(() => {
          return notes.filter((note, index) => {
            return index !== id;
          })       
    });
}

  return (
    <div>
      <Header />
      <InputArea onAdd={handleSubmit} />
      {notes.map((note, index) => (
        <Note
          key={uuidv4()}
          id={index}
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
