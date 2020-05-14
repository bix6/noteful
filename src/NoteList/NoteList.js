import React from 'react';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';
import './NoteList.css';
import { Link } from 'react-router-dom';

class NoteList extends React.Component {
    static contextType = NotefulContext;

    // filter notes if a folderId is matched
    filterNotes() {
        let notes = this.context.notes;

        // if there is a match object
        // map it to get notes with a matching folderId
        // then filter it to remove any nulls
        if (this.props.match && this.props.match.params.folderId) {
            return this.context.notes.map(note => {
                return note.folderid === this.props.match.params.folderId
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
                    ? <Note {...note} key={i} />
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
                <Link to='/note/insert'>Add Note</Link>
            </div>
        );
    }
}

export default NoteList;