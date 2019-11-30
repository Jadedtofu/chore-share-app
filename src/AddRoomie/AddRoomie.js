import React, { Component } from 'react';
import ShareForm from '../ShareForm/ShareForm';
import './AddRoomie.css';
import { Link } from 'react-router-dom';

class AddRoomie extends Component {
    render() {
        return (
        <section className="addRoomie">
            <h2>
                Add a Roomie
            </h2>
            <ShareForm>
                <div className='field'>
                    <label htmlFor="roomie-input">
                        Roomie
                    </label>
                    <input type='text' id="roomie-input" name='roomie-name' placeholder="Jane Rom" required />
                </div>
                <div className='field'>
                    <label htmlFor="roomie-note-input">
                        Notes
                    </label>
                    <textarea id="roomie-note-input" name='roomie-note' rows="6" placeholder="Rooming for 6 months, likes cats" />
                </div>
                <div className="buttons">
                    <button type="submit">
                        <Link to='/home'>Add Roomie</Link>
                    </button>
                </div>
            </ShareForm>
        </section>
        );
    }
}

export default AddRoomie;