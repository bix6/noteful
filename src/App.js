import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import FolderList from './FolderList/FolderList';
import NoteList from './NoteList/NoteList';
import './App.css';

function App() {
    return (
    <main className='App'>
        <Route exact path='/' component={Header} />
        <Route exact path='/' component={FolderList} />
        <Route exact path='/' component={NoteList} />
    </main>
    );
}

export default App;