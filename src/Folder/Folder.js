import React from 'react';
import { NavLink } from 'react-router-dom';
import './Folder.css';
import PropTypes from 'prop-types';

class Folder extends React.Component {
    render() {
        return(
            <li>
                <NavLink to={`/folder/${this.props.id}`} className="folder" id="this.props.id">
                    {this.props.name}
                </NavLink>
            </li>
        );
    }
}

Folder.defaultProps = {
    name: 'default name'
}

Folder.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Folder;