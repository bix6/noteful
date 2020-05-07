import React from 'react';

const NotefulContext = React.createContext({
    folders: [],
    note: [],
    deleteNote: () => {},
    insertFolder: () => {},
    insertNote: () => {}
});

export default NotefulContext;