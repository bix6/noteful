import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';

function App() {
    return (
    <main className='App'>
        <Route exact path='/' component={Header} />
    </main>
    );
}

export default App;