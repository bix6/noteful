import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import FolderList from './FolderList/FolderList';
import NoteList from './NoteList/NoteList';
import './App.css';

function App() {
    return (
    <div className='App'>
        <header>
            <Route exact path='/' component={Header} />
        </header>
        <nav>
            <Route exact path='/' component={FolderList} />
        </nav>
        <main>
            <Route exact path='/' component={NoteList} />
        </main>
    </div>
    );
}

export default App;