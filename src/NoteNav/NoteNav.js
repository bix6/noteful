import React from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import './NoteNav.css';

class NoteNav extends React.Component {
    static contextType = NotefulContext;

    getFolderName() {
        // ensure context exists
        if (this.context.notes && this.context.notes.length > 0) {
            // find the note and its folder Id
            const note = this.context.notes.find(note => 
                note.id === this.props.match.params.noteId
            );
            const folderId = note 
                ? note.folderId
                : null;

            // find the folder and its name
            const folder = this.context.folders.find(folder => 
                folder.id === folderId
            );
            const folderName = folder
                ? folder.name
                : null;

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