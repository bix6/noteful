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
        const notes = this.props.notes.map((note, i) => 
            <Note {...note} key={i}/>
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