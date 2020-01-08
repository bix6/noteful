import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import FolderList from './FolderList/FolderList';

function App() {
    return (
    <main className='App'>
        <Route exact path='/' component={Header} />
        <Route exact path='/' component={FolderList} />
    </main>
    );
}

export default App;