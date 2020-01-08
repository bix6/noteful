import React from 'react';
import { Link } from 'react-router-dom';
import './Folder.css';

class Folder extends React.Component {
    static defaultProps = {
        name: 'default name',
        id: 'default id',
    };

    render() {
        return(
            <Link to="/TODO" className="folder" id="this.props.id">
                {this.props.name}
            </Link>
        );
    }
}

export default Folder;