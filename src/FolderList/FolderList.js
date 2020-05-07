import React from 'react';
import Folder from '../Folder/Folder';
import NotefulContext from '../NotefulContext';
import './FolderList.css';
import { Link } from 'react-router-dom';

class FolderList extends React.Component {

    static contextType = NotefulContext;

    render() {
        const folders = this.context.folders.map((folder, i) => 
            <Folder name={folder.name} id={folder.id} key={i} />
        );

        return(
            <div className="folder-list">
                <ol>
                    {folders}
                </ol>
                <Link to='/folder/insert'>Add Folder</Link>
            </div>
        );
    }
}

export default FolderList;