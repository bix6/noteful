import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import './Note.css';
import config from '../config';
import PropTypes from 'prop-types';

class Note extends React.Component {
    static contextType = NotefulContext;

    deleteNote(e) {
        e.preventDefault();

        const url = config.API_ENDPOINT + `/notes/${this.props.id}`;
        const options = {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
            }
        }
        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    })
                }
                return res;
            })
            .then(res => {
                // if we're deleting from inside a note itself, redirect to /
                if (this.props.match.path.includes('note')) {
                    this.props.history.push('/');
                }
                this.context.deleteNote(this.props.id);
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        return(
            <div className="note">
                <Link to={`/note/${this.props.id}`} className="note-name">{this.props.name}</Link>
                <div className="modified">{this.props.modified}</div>
                <Link to="/" className="delete-note" onClick={e => this.deleteNote(e)}>Delete Note</Link>
            </div>
        )
    }
}

Note.defaultProps = {
    id: 'default id',
    name: 'default name',
    modified: 'default modified',
    folderId: 'default folderId',
    content: 'default content'
}

Note.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    modified: PropTypes.string.isRequired,
    folderId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default withRouter(Note);