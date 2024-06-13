import React from 'react';
import { MdDelete } from 'react-icons/md';

const DeleteButton = ({ id, onDelete }) => (
        <button className="note-item__delete-button" onClick={() => onDelete(id)}>
            <MdDelete />
        </button>
);

export default DeleteButton;
