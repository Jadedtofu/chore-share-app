import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from './AppHeader';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <AppHeader />
        </BrowserRouter>
        , div
    );
    ReactDOM.unmountComponentAtNode(div);
});
