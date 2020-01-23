import React from 'react';
import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';
import NotefulContext from '../NotefulContext';
import './NoteList.css';

class NoteList extends React.Component {
    static contextType = NotefulContext;

    // filter notes if a folderId is matched
    filterNotes() {
        let notes = this.context.notes;

        // if there is a match object
        // map it to get notes with a matching folderId
        // then filter it to remove any nulls
        if (this.props.match) {
            return this.context.notes.map(note => {
                return note.folderId === this.props.match.params.folderId
                    ? note
                    : null;
            }).filter(note => {
                return note != null;
            });
        }

        return notes;
    }

    // create jsx for Note components
    createNotes(notes) {

        return notes 
            ? notes.map((note, i) => {
                return note
                    ? <Note {...note} key={i}/>
                    : null;
            })
            : <Note />
    }

    render() {

        // filter notes then create the jsx
        const notes = this.createNotes(this.filterNotes());

        return(
            <div className="note-list">
                { notes }
                <AddNote />
            </div>
        );
    }
}

export default NoteList;