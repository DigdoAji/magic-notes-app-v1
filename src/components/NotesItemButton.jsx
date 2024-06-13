import React from 'react';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';

const NotesItemButton = ({ id, onDelete, onArchived, isArchived }) => (
        <div className="note-item__action">
            <ArchiveButton id={id} onArchived={onArchived} isArchived={isArchived} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
);

export default NotesItemButton;
