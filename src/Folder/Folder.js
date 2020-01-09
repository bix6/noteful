import React from 'react';
import { NavLink } from 'react-router-dom';
import './Folder.css';

class Folder extends React.Component {
    static defaultProps = {
        name: 'default name',
        id: 'default id',
    };

    render() {
        return(
            <NavLink to={`/folder/${this.props.id}`} className="folder" id="this.props.id">
                {this.props.name}
            </NavLink>
        );
    }
}

export default Folder;