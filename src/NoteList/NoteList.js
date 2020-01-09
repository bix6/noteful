import React from 'react';
import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';
import './NoteList.css';
import STORE from '../dummy-store';

class NoteList extends React.Component {
    static defaultProps = {
        notes: STORE.notes
    };

    render() {
        // if there is a match object, get the folderId and only return matching notes
        const folderId = this.props.match
            ? this.props.match.params.folderId
            : null;
        const notes = this.props.notes.map((note, i) => {
            if (!folderId) {
                return <Note {...note} key={i}/>;
            }
            if (folderId && note.folderId === folderId) {
                return <Note {...note} key={i}/>;
            }
            return null;
        }
        );

        return(
            <div className="note-list">
                { notes }
                <AddNote />
            </div>
        );
    }
}

export default NoteList;