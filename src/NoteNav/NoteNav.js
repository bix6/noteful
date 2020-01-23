import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import './NoteNav.css';

class NoteNav extends React.Component {
    static defaultProps = {
        folderName: 'default folderName'
    };

    goBack(e) {
        e.preventDefault();
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="note-nav">
                <Link to='/' onClick={e => this.goBack(e)}>Back</Link>
                <h2>{this.props.folderName}</h2>
            </div>
        );
    }
}

export default withRouter(NoteNav);