import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import FolderList from './FolderList/FolderList';
import NoteList from './NoteList/NoteList';
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
                </nav>
                <main>
                    <Route 
                        exact path='/' 
                        render={() => <NoteList notes={this.state.notes} />} />
                    <Route 
                        path='/folder/:folderId' 
                        render={(routerProps) => 
                            <NoteList 
                                notes={this.state.notes.map(note => {
                                    return note.folderId === routerProps.match.params.folderId
                                        ? note
                                        : null;})
                                } 
                            />
                        } 
                    />
                </main>
            </div>
        );
    }

}

export default App;