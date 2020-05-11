import React from 'react';
import PropTypes from 'prop-types';

const NotefulContext = React.createContext({
    folders: [],
    note: [],
    deleteNote: () => {},
    insertFolder: () => {},
    insertNote: () => {}
});

NotefulContext.Provider.propTypes = {
    folders: PropTypes.array,
    note: PropTypes.array,
    deleteNote: PropTypes.func,
    insertFolder: PropTypes.func,
    insertNote: PropTypes.func
}

export default NotefulContext;