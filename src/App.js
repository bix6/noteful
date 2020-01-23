import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import FolderList from './FolderList/FolderList';
import NoteList from './NoteList/NoteList';
import NoteNav from './NoteNav/NoteNav';
import NotePage from './NotePage/NotePage';
import NotefulContext from './NotefulContext';
import './App.css';

class App extends React.Component {
   state = {
       folders: [],
       notes: [],
   };

    // fetches the init state
    // called when the component mounts
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

    render() {
        const contextValue = {
            folders: this.state.folders,
            notes: this.state.notes
        };
        return (
            <div className='App'>
                <header>
                    <Route path='/' component={Header} />
                </header>
                <NotefulContext.Provider value={contextValue}>
                    <nav>
                        <Route 
                            exact path='/' 
                            component={FolderList} />
                        <Route 
                            path='/folder/:folderId' 
                            component={FolderList} />
                        <Route
                            path='/note/:noteId'
                            component={NoteNav} />
                    </nav>
                    <main>
                        <Route 
                            exact path='/' 
                            component={NoteList} />
                        <Route 
                            path='/folder/:folderId' 
                            component={NoteList}/>
                        <Route
                            path='/note/:noteId'
                            component={NotePage} />
                    </main>
                </NotefulContext.Provider>
            </div>
        );
    }

}

export default App;