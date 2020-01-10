import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NoteNav.css';

class NoteNav extends React.Component {
    static defaultProps = {
        folderId: 'default folderId',
        folders: [
            {
                id: 'default id',
                name: 'default name'
            }
        ],
    };

    goBack(e) {
        e.preventDefault();
        this.props.history.goBack();
    }
    
    render() {
        let folderName = this.props.folders.find(folder => 
            folder.id === this.props.folderId);
        folderName = folderName
            ? folderName.name
            : 'default name';
        return (
            <div className="note-nav">
                <Link to='/' onClick={e => this.goBack(e)}>Back</Link>
                <h2>{folderName}</h2>
            </div>
        );
    }
}

export default withRouter(NoteNav);