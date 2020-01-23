import React from 'react';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';
import './NotePage.css';

class NotePage extends React.Component {
    /*
    static defaultProps = {
        id: 'default id',
        name: 'default name',
        modified: 'default modified',
        folderId: 'default folderId',
        content: 'default content'
    }

    render() {
        return(
            <div className="note-page">
                <Note {...this.props}/>
                <div className="note-content">
                    <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
    */

    static contextType = NotefulContext;

    getNote() {
        if (this.context.notes) {
            return this.context.notes.find(note => note.id === this.props.match.params.noteId)
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