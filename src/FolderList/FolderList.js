import React from 'react';
import Folder from '../Folder/Folder';
import AddFolder from '../AddFolder/AddFolder';
import NotefulContext from '../NotefulContext';
import './FolderList.css';

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
                <AddFolder />
            </div>
        );
    }
}

export default FolderList;