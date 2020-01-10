import React from 'react';
import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';
import './NoteList.css';

class NoteList extends React.Component {
    static defaultProps = {
        "notes": [
            {
                id: 'default id',
                name: 'default name',
                modified: 'default modified',
                folderId: 'default folderId',
                content: 'default content'
            }
        ]
    };

    render() {
        const notes = this.props.notes.map((note, i) => {
            return note
                ? <Note {...note} key={i}/>
                : null;
        });

        return(
            <div className="note-list">
                { notes }
                <AddNote />
            </div>
        );
    }
}

export default NoteList;