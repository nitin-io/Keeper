import React, { useState } from "react";

function InputArea(props) {
  const [note, setNote] = useState({});
  const [editing, setEditing] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content,
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value,
        };
      }
    });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.onAdd(note);
          setNote({
            title: "",
            content: "",
          });
        }}
      >
        <input
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
          onFocus={() => setEditing(true)}
          onBlur={() => {
            if (!note.title)
              setEditing(!false)
          }}
        />
        {editing && <input
          type="text"
          onChange={handleChange}
          name="content"
          placeholder="Add your note..."
          value={note.content}
        />}
        <button className="add-btn">Add</button>
      </form>
    </div>
  );
}

export default InputArea;
