import React from 'react';
import Folder from '../Folder/Folder';
import AddFolder from '../AddFolder/AddFolder';
import STORE from '../dummy-store.js';
import './FolderList.css';

class FolderList extends React.Component {
    static defaultProps = {
        folders: STORE.folders
    }

    render() {
        const folders = this.props.folders.map((folder, i) => 
            <Folder name={folder.name} id={folder.id} key={i} />
        );

        return(
            <div className="folder-list">
                <ol>
                    {folders}
                </ol>
                <AddFolder />
            </div>
        );
    }
}

export default FolderList;