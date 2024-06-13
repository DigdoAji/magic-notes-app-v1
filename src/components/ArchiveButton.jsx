import React from 'react';
import { MdUnarchive, MdArchive } from 'react-icons/md';

const ArchiveButton = ({ id, onArchived, isArchived }) => (
  isArchived ? (
        <button className="note-item__unarchive-button" onClick={() => onArchived(id)}>
            <MdUnarchive />
        </button>
  ) : (
        <button className="note-item__archive-button" onClick={() => onArchived(id)}>
            <MdArchive />
        </button>
  )
);

export default ArchiveButton;
