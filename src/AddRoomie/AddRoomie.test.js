import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddRoomie from './AddRoomie';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <AddRoomie />
        </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
});
