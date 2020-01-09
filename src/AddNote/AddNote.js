import React from 'react';
import { Link } from 'react-router-dom';
import './AddNote.css';

class AddNote extends React.Component {
    render() {
        return (
            <Link to='/TODO' className="add-note">Add Note</Link>
        );
    }
}

export default AddNote;