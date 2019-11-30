import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                &copy; <span className="app-footer">Chore Share</span> 2019
            </footer>
        );
    }
}

export default Footer;