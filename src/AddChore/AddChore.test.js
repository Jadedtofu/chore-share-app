import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddChore from './AddChore';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <AddChore />
        </BrowserRouter>
        , div);
    ReactDOM.unmountComponentAtNode(div);
});
