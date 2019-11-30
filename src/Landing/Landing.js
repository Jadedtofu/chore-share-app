import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Landing.css';

class Landing extends Component {
    render() {
        return (
            <main className="landing-page">
                <section className="landing-sub">
                    <header>
                        <h2>Sharing chores we don't want to do, together!</h2>
                    </header>
                    <p>
                        Chore Share will let roomies share chores in one place! Click "Share" to get started. Next, click "Add Roomie" to add you and your roommate(s). Then click "Add Chore" and select a roomie to start keeping track of each other's chores.
                    </p>
                    <button type="button"><Link to='/home'>Share!</Link></button>
                </section>
            </main>
        );
    }
}

export default Landing;