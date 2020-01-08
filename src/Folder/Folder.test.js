import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Folder from './Folder';

describe('Folder Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Folder />
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    });
});