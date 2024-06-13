import React from 'react';
import NotesItem from './NotesItem';

const NotesList = ({ notes, onDelete, onArchived }) => (
        <>
            {
                notes.length ? <div className="notes-list">
                    {
                        notes.map((note) => (
                            <NotesItem
                                key={note.id}
                                id={note.id}
                                onDelete={onDelete}
                                onArchived={onArchived}
                                isArchived={note.archived}
                                {...note}
                            />
                        ))
                    }
                </div> : <p className="notes-list__empty-message">No notes are displayed</p>

            }
        </>
);

export default NotesList;
