import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import FolderList from './FolderList/FolderList';
import NoteList from './NoteList/NoteList';
import NoteNav from './NoteNav/NoteNav';
import NotePage from './NotePage/NotePage';
import './App.css';
import STORE from './dummy-store';

class App extends React.Component {
    state = {
        folders: STORE.folders,
        notes: STORE.notes
    };

    render() {
        return (
            <div className='App'>
                <header>
                    <Route path='/' component={Header} />
                </header>
                <nav>
                    <Route 
                        exact path='/' 
                        render={() => <FolderList folders={this.state.folders} />} />
                    <Route 
                        path='/folder/:folderId' 
                        render={() => <FolderList folders={this.state.folders} />} />
                    <Route
                        path='/note/:noteId'
                        render={(routerProps) => {
                            const folderId = this.state.notes.find(note => 
                                    note.id === routerProps.match.params.noteId
                                ).folderId;
                            const folderName = this.state.folders.find(folder => 
                                folder.id = folderId
                                ).name;
                            return <NoteNav folderName={folderName}  /> 
                        }}
                    />  
                </nav>
                <main>
                    <Route 
                        exact path='/' 
                        render={() => <NoteList notes={this.state.notes} />} />
                    <Route 
                        path='/folder/:folderId' 
                        render={(routerProps) => {
                            const notes = this.state.notes.map(note => {
                                return note.folderId === routerProps.match.params.folderId
                                    ? note
                                    : null;
                            });
                            return <NoteList notes={notes} /> 
                        }} 
                    />
                    <Route
                        path='/note/:noteId'
                        render={(routerProps) => 
                            <NotePage {...this.state.notes.find(note =>
                                note.id === routerProps.match.params.noteId)} />
                        } />
                </main>
            </div>
        );
    }

}

export default App;