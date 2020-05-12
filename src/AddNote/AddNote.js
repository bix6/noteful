import React from 'react';
import './AddNote.css';
import ValidationError from '../ValidationError/ValidationError';
import config from '../config';
import NotefulContext from '../NotefulContext';

class AddNote extends React.Component {
    static contextType = NotefulContext;

    state = {
        name: {
            value: '',
            touched: false
        },
        folderid: {
            value: 1,
            touched: false
        },
        content: {
            value: '',
            touched: false
        },
        error: ''
    };

    updateName(name) {
        this.setState({
            name : {
                value: name,
                touched: true
            }
        });
    }

    updateFolderId(id) {
        this.setState({
            folderid : {
                value: id,
                touched: true
            }
        });
    }

    updateContent(content) {
        this.setState({
            content : {
                value: content,
                touched: true
            }
        });
    }

    validateName() {
        const name = this.state.name.value.trim();

        if (!name) {
            return 'Name is required';
        }
    }

    validateFolderId() {
        const folderId = this.state.folderid.value.trim();

        if (!folderId) {
            return 'Folder ID is required';
        }
    }

    validateContent() {
        const content = this.state.content.value.trim();

        if (!content) {
            return 'Content is required';
        }
    }

    handleCancel = () => {
        this.props.history.push('/');
    }

    handleSubmit(e) {
        e.preventDefault();

        const url = config.API_ENDPOINT + '/notes';
        const body = {
            name: this.state.name.value,
            folderId: this.state.folderid.value,
            content: this.state.content.value,
            modified: new Date()
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json'
            }
        };

        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    })
                }
                return res.json();
            })
            .then(resJson => {
                this.context.insertNote(resJson);
                this.setState({
                    name: {
                        value: '',
                        touched: false
                    },
                    folderid: {
                        value: null,
                        touched: false
                    },
                    content: {
                        value: '',
                        touched: false
                    },
                    error: null
                });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({
                    error: err.message
                })
            });
    }

    getFolderOptions() {
        return this.context.folders.map((obj, i) => {
            return (<option value={obj.id} key={i}>{obj.name}</option>)
        });
    }

    render() {
        return (
            <form
                className="add-note"
                onSubmit={ e => this.handleSubmit(e) } >
                <h2>Add Note</h2>
                { this.state.error && (
                    <p>Error: { this.state.error }</p>
                )}
                <div className="form-group">
                    <label htmlFor="name">
                        Name *:{' '}
                    </label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        onChange={ e => { this.updateName(e.target.value) } } />
                    { this.state.name.touched && (
                        <ValidationError message={ this.validateName() } />
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="folderid">
                        Folder ID *:{' '}
                    </label>
                    <select
                        name='folderid'
                        id='folderid'
                        onChange={ e => { this.updateFolderId(e.target.value) } } >
                        { this.getFolderOptions() }
                    </select>
                    { this.state.folderid.touched && (
                        <ValidationError message={ this.validateFolderId() } />
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="content">
                        Content *:{' '}
                    </label>
                    <textarea
                        name='content'
                        id='content'
                        onChange={ e => { this.updateContent(e.target.value) } } />
                    { this.state.content.touched && (
                        <ValidationError message={ this.validateContent() } />
                    )}
                </div>

                <div className="add-note-button-group">
                    <button type="button" className="add-note-button" onClick={ this.handleCancel }>
                        Cancel
                    </button>
                    <button type="reset" className="add-note-button">
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="add-note-button"
                        disabled={ this.validateName() || this.validateContent() } >
                        Save
                    </button>
                </div>
            </form>
        );
    }
}

export default AddNote;