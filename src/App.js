import React, { useState } from "react";
import Header from "./Header";
import NotesList from "./NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    }
  ]);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const onType = (id, updatedKey, updatedValue) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id
          ? {
              ...note,
              [updatedKey]: updatedValue
            }
          : note
      )
    );
  };

  return (
    <div className="app">
      <Header addNote={addNote} />
      <NotesList notes={notes} onType={onType} />
    </div>
  );
};

export default App;
