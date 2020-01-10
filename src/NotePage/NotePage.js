import React from 'react';
import Note from '../Note/Note';
import './NotePage.css';

class NotePage extends React.Component {
    static defaultProps = {
        id: 'default id',
        name: 'default name',
        modified: 'default modified',
        folderId: 'default folderId',
        content: 'default content'
    }

    render() {
        return(
            <div className="note-page">
                <Note {...this.props}/>
                <div className="note-content">
                    <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
}

export default NotePage;