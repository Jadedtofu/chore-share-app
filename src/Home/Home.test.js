import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Home from './Home';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
        , div);
    ReactDOM.unmountComponentAtNode(div);
});
