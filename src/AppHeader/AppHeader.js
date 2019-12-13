import React, { Component } from 'react';
import './AppHeader.css';
import { Link } from 'react-router-dom';

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header" role="banner">
                <h1 className="app-title"><Link to='/'><i className="fas fa-clipboard-check"></i> Chore Share </Link></h1>
            </header>
        );
    }

}

export default AppHeader;