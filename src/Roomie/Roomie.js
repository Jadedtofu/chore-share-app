import React, { Component } from 'react';
import './Roomie.css';
// import { Link } from 'react-router-dom';

export default function Roomie(props) {
        return (
            <>
            <div className="tooltip">
               <header role="banner" className="tooltipContent">
                <h2>
                    {props.children}
                </h2>
               </header>
                <p className='tooltipMessage'>
                    {props.note}
                </p>
            </div>
                <button type="button" className="remove-roomie">
                    Remove
                </button>
            </>
        );
}

/*

// try this with mapping dummy data for roomies and chores

class Roomie extends Component {
    render() {
        const { chores, note } = this.props
        <section className="roomie">
            <div className="tooltip">
                <header role="banner" className="tooltipContent">
                    <h2>
                        {name}
                    </h2>
                </header>
                <p className="tooltipMessage">
                    {note}
                </p>
            </div>
                <button type="button" className="remove-roomie">
                    Remove
                </button>
            <ul>
               <li>
                <Chore chore={chores.chores}
                       roomie_id={chores.roomie_id}
                       checked=false>
               </li>
            </ul>
                <button type="button" className="addChore">
                    <Link to='/addChore'>Add a Chore </Link>
                </button>
        </section>
    }
}

export default Roomie;

*/