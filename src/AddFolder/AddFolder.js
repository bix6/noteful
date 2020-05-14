import React from 'react';
import './AddFolder.css';
import ValidationError from '../ValidationError/ValidationError';
import config from '../config';
import NotefulContext from '../NotefulContext';
import './AddFolder.css';


class AddFolder extends React.Component {
    static contextType = NotefulContext;

    state = {
        folder: "",
        touched: false,
        error: ''
    }

    updateFolder(folder) {
        this.setState({ 
            folder: folder,
            touched: true
        })
    }

    validateFolder() {
        const folder = this.state.folder.trim();

        if (folder.length === 0) {
            return 'Folder is required';
        }
        else if (folder.length < 3) {
            return 'Folder must be 3+ chars';
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        const body = { name: this.state.folder };
        const url = config.API_ENDPOINT + '/folders';
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
            }
        };

        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    });
                }
                return res.json()
            })
            .then(resJson => {
                this.context.insertFolder(resJson);
                this.setState({
                    folder: '',
                    touched: false,
                    error: ''
                });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({
                    error: err.message
                })
            })
    }

    handleCancel = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <form
                className="add-folder"
                onSubmit={ e => this.handleSubmit(e) } >
                <h2>Add Folder</h2>
                { this.state.error && (
                    <p>Error: { this.state.error }</p>
                )}
                <div className="form-group">
                    <label htmlFor="folder">
                        Folder *:{' '}
                    </label>
                    <input
                        type='text'
                        name='folder'
                        id='folder'
                        onChange={ e => { this.updateFolder(e.target.value) } } />
                    { this.state.touched && (
                        <ValidationError message={ this.validateFolder() } />
                    ) }
                </div>

                <div className="add-folder-button-group">
                    <button type="button" className="add-folder-button" onClick={ this.handleCancel }>
                        Cancel
                    </button>
                    <button type="reset" className="add-folder-button">
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="add-folder-button"
                        disabled={ this.validateFolder() } >
                        Save
                    </button>
                </div>
            </form>
        );
    }
}

export default AddFolder;