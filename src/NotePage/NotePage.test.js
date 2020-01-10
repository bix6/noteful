import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NotePage from './NotePage';

describe('NotePage Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <NotePage />
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    });
});