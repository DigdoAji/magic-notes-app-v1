import React from 'react';
import autoBind from 'auto-bind';
import { toast } from 'react-toastify';

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      charLimit: 50,
    };
    autoBind(this);
  }

  onTitleChangeEventHandler(event) {
    if (event.target.value.length <= 50) {
      this.setState(() => ({
        title: event.target.value,
        charLimit: 50 - event.target.value.length,
      }));
    } else {
      toast.error('Character length limit reached!', { toastId: 'limit-alert' });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => ({
      body: event.target.value,
    }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const { title, body } = this.state;
    if (title.trim() === '') {
      toast.error('Note title cannot be empty!', { toastId: 'error-title' });
    } else if (body.trim() === '') {
      toast.error('Note content cannot be empty!', { toastId: 'error-body' });
    } else {
      this.props.addNote(this.state);
      toast.success('New notes added!');
      this.setState({
        title: '',
        body: '',
        charLimit: 50,
      });
    }
  }

  render() {
    return (
            <div className="note-input">
                <h2>New Notes</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <input
                        className="note-input__title"
                        type="text"
                        name="title"
                        placeholder="Input title here...."
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler}
                    />
                    <p className="note-input__title__char-limit">Character left: {this.state.charLimit}</p>
                    <textarea
                        className="note-input__body"
                        type="text"
                        name="body"
                        value={this.state.body}
                        placeholder="Write your notes here...."
                        onChange={this.onBodyChangeEventHandler}
                    />
                    <button className="add-note-button" type="submit">Add New Notes</button>
                </form>
            </div>
    );
  }
}

export default NotesInput;
