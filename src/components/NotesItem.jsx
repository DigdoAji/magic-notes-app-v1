import React from 'react';
import NotesItemButton from './NotesItemButton';
import NotesItemContent from './NotesItemContent';

const NotesItem = ({ title, createdAt, body, id, onDelete, onArchived, isArchived }) => (
        <div className="note-item">
            <NotesItemContent
                title={title}
                createdAt={createdAt}
                body={body}
            />
            <NotesItemButton
                id={id}
                onDelete={onDelete}
                onArchived={onArchived}
                isArchived={isArchived}
            />
        </div>
);

export default NotesItem;
