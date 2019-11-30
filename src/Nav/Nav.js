import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <>
                <nav role="navigation">
                    <div className="app-title">
                        <Link to='/home'>Home</Link>
                    </div>
                </nav>
            </>
        );
    }

}

export default Nav;