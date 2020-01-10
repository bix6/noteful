import React from 'react';
import Folder from '../Folder/Folder';
import AddFolder from '../AddFolder/AddFolder';
import './FolderList.css';

class FolderList extends React.Component {
    static defaultProps = {
        folders: [
            {
              "id": "default id",
              "name": "default name"
            }
          ]
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