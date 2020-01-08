import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
    render() {
        return(
            <Link to="/" className="header">Noteful</Link>
        );
    }
}

export default Header;