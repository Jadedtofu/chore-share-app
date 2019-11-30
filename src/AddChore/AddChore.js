import React, { Component } from 'react';
import ShareForm from '../ShareForm/ShareForm';
import './AddChore.css';
import { Link } from 'react-router-dom';

class AddChore extends Component {
    render() {
        return (
        <section className="addChore">
            <h2>
                Add a Chore
            </h2>
            <ShareForm>
                <div className='field'>
                    <label htmlFor="chore-input">
                        Chore
                    </label>
                    <input type='text' id="chore-input" name='chore-name' placeholder="Take out Trash" required />
                </div>
                <div className='field'>
                    <label htmlFor="roomie-select">
                        Select a Roomie
                    </label>
                    <select id="roomie-id" name="roomie-select">
                        <option value="Jane Rom">Jane Rom</option>
                        <option value="James Mor">James Mor</option>
                    </select>
                </div>
                <div className="buttons">
                    <button type="submit">
                        <Link to='/home'>Add Chore</Link>
                    </button>
                </div>
            </ShareForm>
        </section>
        );
    }
}

export default AddChore;