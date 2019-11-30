import React, { Component } from 'react';
import './Home.css';
import Roomie from '../Roomie/Roomie';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <section className="chore-share-main">
                <Roomie note="Rooming for 6 months, likes cats">
                    Jane Rom
                </Roomie>
                <Roomie note="Rooming for 1 year, allergic to dogs">
                    James Mor
                </Roomie>
                <button type="button"><Link to='/addRoomie'>Add a Roomie</Link></button>
            </section>
        );
    }
}

export default Home;