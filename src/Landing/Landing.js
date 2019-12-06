import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

class Landing extends Component {
    render() {
        return (
            <main className="landingPage">
                <section className="landingSub">
                    <header>
                        <h2>Sharing chores we don't want to do, together!</h2>
                    </header>
                    <p>
                        Chore Share will let roomies share chores in one place! Click "Together!" to get started. Next, click "Add a Roomie" to add you and your roommate(s). Then click "Add a Chore" and select a roomie to start keeping track of each other's chores.
                    </p>
                    <button type="button"><Link to='/home'>Together!</Link></button>
                </section>
            </main>
        );
    }
}

export default Landing;