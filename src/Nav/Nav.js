import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <>
                <nav className="top" role="navigation">
                    <ul>
                        <li className="app-home">
                            <Link to='/home'>Home</Link>
                        </li>
                        <li className="roomie-page">
                            <Link to="/roomiePage">Roomie Page</Link>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }

}

export default Nav;