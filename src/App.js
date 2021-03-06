import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import FolderList from './FolderList/FolderList';
import NoteList from './NoteList/NoteList';
import NoteNav from './NoteNav/NoteNav';
import NotePage from './NotePage/NotePage';
import NotefulContext from './NotefulContext';
import './App.css';
import config from './config';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import MainError from './ErrorBoundaries/MainError';
import NavError from './ErrorBoundaries/NavError';

class App extends React.Component {
   state = {
       folders: [],
       notes: [],
   };

    // fetches the init state
    // called when the component mounts
    // endpoint is used to get endpoint and update state for endpoint name
    getInitState(endpoint) {
        const url = config.API_ENDPOINT + `/${endpoint}`
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
            }
        }
        fetch(url, options)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw Error(res.statusText);
            })
            .then(resJson => {
                this.setState({
                    [endpoint]: resJson
                });
                return resJson;
            })
            .catch(err => {
                console.error(err);
            })
    }

    // init state on component mount
    // gets folders and notes from server
    componentDidMount() {
        this.getInitState('folders');
        this.getInitState('notes');
    }

    deleteNote = id => {
        const newNotes = this.state.notes.filter(note => 
            note.id !== id
        );
        this.setState({
            notes: newNotes
        });
    }

    insertFolder = folder => {
        let newFolders = this.state.folders;
        newFolders.push(folder);
        this.setState({
            folders: newFolders
        });
    }

    insertNote = note => {
        let newNotes = this.state.notes;
        newNotes.push(note);
        this.setState({
            notes: newNotes
        });
    }

    render() {
        const contextValue = {
            folders: this.state.folders,
            notes: this.state.notes,
            deleteNote: this.deleteNote,
            insertFolder: this.insertFolder,
            insertNote: this.insertNote
        };

        return (
            <div className='App'>
                <header>
                    <Route path='/' component={Header} />
                </header>
                <NotefulContext.Provider value={contextValue}>
                    <nav>
                        <NavError>
                            <Switch>
                                <Route 
                                    exact path='/' 
                                    component={FolderList} />
                                <Route
                                    exact path='/folder/insert'
                                    component={() => <></>} />
                                <Route
                                    exact path='/note/insert'
                                    component={ () => <></> } />
                                <Route 
                                    path='/folder/:folderId' 
                                    component={FolderList} />
                                <Route
                                    path='/note/:noteId'
                                    component={NoteNav} />
                            </Switch>
                        </NavError>
                    </nav>
                    <main>
                        <MainError>
                            <Switch>
                                <Route 
                                    exact path='/' 
                                    component={NoteList} />
                                <Route
                                    exact path='/folder/insert'
                                    component={AddFolder} />
                                <Route
                                    exact path='/note/insert'
                                    component={AddNote} />
                                <Route 
                                    path='/folder/:folderId' 
                                    component={NoteList}/>
                                <Route
                                    path='/note/:noteId'
                                    component={NotePage} />
                            </Switch>
                        </MainError>
                    </main>
                </NotefulContext.Provider>
            </div>
        );
    }

}

export default App;