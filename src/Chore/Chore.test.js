import React from 'react';
import ReactDOM from 'react-dom';
import Chore from './Chore';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Chore />
        , div);
    ReactDOM.unmountComponentAtNode(div)
});
