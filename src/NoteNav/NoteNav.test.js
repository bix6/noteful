import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NoteNav from './NoteNav';

describe('NoteNav Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <NoteNav />
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    });
});