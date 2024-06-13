import React from 'react';

const NotesHeader = ({ onSearch }) => (
    <div className='note-app__header'>
      <h1>Magic Notes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Search Notes Here...."
          onChange={onSearch}
        />
      </div>
    </div>
);

export default NotesHeader;
