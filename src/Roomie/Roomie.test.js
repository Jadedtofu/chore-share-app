import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Roomie from './Roomie';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const chores = [
        { id: 1, chore: 'Take out the trash', checked: false, roomie_id: 1 },
        { id: 2, chore: 'Sweep living room floor', checked: false, roomie_id: 1},
        { id: 4, chore: 'Vacuum hallway', checked: false, roomie_id: 1}
    ];
    ReactDOM.render(
        <BrowserRouter>
            <Roomie chores={chores} />
        </BrowserRouter>
        , div);
    ReactDOM.unmountComponentAtNode(div);
});
