import React from 'react';
import NotesList from './NotesList';
import NotesInput from './NotesInput';

const NotesBody = ({ notes, searchQuery, addNote, onArchived, onDelete }) => {
  const activeNotes = notes
    .filter((note) => !note.archived)
    .filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const archivedNotes = notes
    .filter((note) => note.archived)
    .filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
        <div className="note-app__body">
            <h2 className="note-body__title">Welcome to Magic Notes!</h2>
            <NotesInput addNote={addNote} />
            <h2>Active Notes</h2>
            <NotesList
                notes={activeNotes}
                onArchived={onArchived}
                onDelete={onDelete}
            />
            <h2>Archived Notes</h2>
            <NotesList
                notes={archivedNotes}
                onArchived={onArchived}
                onDelete={onDelete}
            />
        </div>
  );
};

export default NotesBody;
