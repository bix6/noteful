import React from 'react';
import { Link } from 'react-router-dom';
import './Note.css';

class Note extends React.Component {
    static defaultProps = {
        id: 'default id',
        name: 'default name',
        modified: 'default modified',
        folderId: 'default folderId',
        content: 'default content'
    }

    render() {
        return(
            <div className="note">
                <Link to="/TODO" className="note-name">{this.props.name}</Link>
                <div className="modified">{this.props.modified}</div>
                <Link to="/TODO" className="delete-note">Delete Note</Link>
            </div>
        )
    }
}

export default Note;