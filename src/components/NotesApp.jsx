import React from 'react';
import autoBind from 'auto-bind';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import { getInitialData } from '../utils/data';

// Components
import NotesHeader from './NotesHeader';
import NotesBody from './NotesBody';
import NotesFooter from './NotesFooter';

// Toast Alert
import 'react-toastify/dist/ReactToastify.min.css';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchQuery: '',
    };
    autoBind(this);
  }

  onAddNoteEventHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date().toLocaleDateString(),
          archived: false,
        },
      ],
    }));
  }

  onArchivedEventHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    this.setState({ notes });
  }

  onDeleteEventHandler(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
        toast.success('Notes deleted!');
      } else {
        toast.error('Notes not deleted!');
      }
    });
  }

  onSearchEventHandler(event) {
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    const { notes, searchQuery } = this.state;

    return (
      <div className="notes-app">
        <NotesHeader onSearch={this.onSearchEventHandler} />
        <NotesBody
          notes={notes}
          searchQuery={searchQuery}
          addNote={this.onAddNoteEventHandler}
          onArchived={this.onArchivedEventHandler}
          onDelete={this.onDeleteEventHandler}
          isArchived
        />
        <NotesFooter />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default NotesApp;
