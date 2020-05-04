import React from 'react';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';
import './NotePage.css';

class NotePage extends React.Component {
    static contextType = NotefulContext;

    getNote() {
        if (this.context.notes) {
            return this.context.notes.find(note => note.id == this.props.match.params.noteId)
        }
    }

    render() {
        const note = this.getNote() || {};
        return(
            <div className="note-page">
                <Note {...note}/>
                <div className="note-content">
                    <p>{note.content}</p>
                </div>
            </div>
        )
    }
}

export default NotePage;