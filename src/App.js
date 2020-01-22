import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import FolderList from './FolderList/FolderList';
import NoteList from './NoteList/NoteList';
import NoteNav from './NoteNav/NoteNav';
import NotePage from './NotePage/NotePage';
import './App.css';

class App extends React.Component {
   state = {
       folders: [],
       notes: [],
   };

    getFolders() {
        const url = 'http://localhost:9090/folders';
        const options = {
            method: 'GET',
        }
        fetch(url, options)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw Error(res.statusText);
            })
            .then(resJson => {
                console.log(resJson);
                this.setState({
                    folders: resJson
                });
                return resJson;
            })
            .catch(err => {
                console.error(err);
            })
    }

    // fetches the init state, called when the component mounts
    // endpoint is used to get endpoint and update state for endpoint name
    getInitState(endpoint) {
        const url = `http://localhost:9090/${endpoint}`;
        const options = {
            method: 'GET',
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

    getFolderName(routerProps) {
        const folderId = this.state.notes.find(note => 
            note.id === routerProps.match.params.noteId
        ).folderId;
        const folderName = this.state.folders.find(folder => 
            folder.id === folderId
        ).name;
        return folderName;
    }

    getNotes(routerProps) {
        const notes = this.state.notes.map(note => {
            return note.folderId === routerProps.match.params.folderId
                ? note
                : null;
        });
        return notes;
    }

    getNote(routerProps) {
        return this.state.notes.find(note => note.id === routerProps.match.params.noteId)
    }

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
                        render={(routerProps) => <NoteNav folderName={this.getFolderName(routerProps)} />} />  
                </nav>
                <main>
                    <Route 
                        exact path='/' 
                        render={() => <NoteList notes={this.state.notes} />} />
                    <Route 
                        path='/folder/:folderId' 
                        render={(routerProps) => <NoteList notes={this.getNotes(routerProps)} />} />
                    <Route
                        path='/note/:noteId'
                        render={(routerProps) => <NotePage {...this.getNote(routerProps)} />} />
                </main>
            </div>
        );
    }

}

export default App;