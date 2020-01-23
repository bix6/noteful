import React from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import './NoteNav.css';

class NoteNav extends React.Component {
    static contextType = NotefulContext;

    getFolderName() {
        if (this.context.notes && this.context.notes.length > 0) {
            const folderId = this.context.notes.find(note => 
                note.id === this.props.match.params.noteId
            ).folderId;
            const folderName = this.context.folders.find(folder =>
                folder.id === folderId
            ).name;
            return folderName;
        }
    }


    goBack(e) {
        e.preventDefault();
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="note-nav">
                <Link to='/' onClick={e => this.goBack(e)}>Back</Link>
                <h2>{this.getFolderName()}</h2>
            </div>
        );
    }
}

export default NoteNav;