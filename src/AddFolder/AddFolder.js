import React from 'react';
import { Link } from 'react-router-dom';
import './AddFolder.css';

class AddFolder extends React.Component {
    render() {
        return (
            <Link to="/TODO" className="add-folder">
                Add Folder
            </Link>
        );
    }
}

export default AddFolder;