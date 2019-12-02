import React, { Component } from 'react';
import './RoomiePage.css';
import Roomie from '../Roomie/Roomie';

class RoomiePage extends Component {
    // want this to render the page for the correct roomie
    render() {
        return (
            <>
                <Roomie note="Rooming for 6 months, likes cats">
                    Jane Rom
                </Roomie>
                <Roomie note="Rooming for 1 year, allergic to dogs">
                    James Mor
                </Roomie>
            </>
        );
    }
}

export default RoomiePage;