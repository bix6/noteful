import React from 'react';

const NotefulContext = React.createContext({
    folders: [],
    note: [],
    deleteNote: () => {},
    insertFolder: () => {},
});

export default NotefulContext;