import React, { Component } from 'react';
import './Roomie.css';
import Chore from '../Chore/Chore';
import { Link } from 'react-router-dom';

export default function Roomie(props) {
        return (
            <>
                <h3>
                    {props.children}
                </h3>
                <p>
                    {props.note}
                </p>
                <button type="button" className="remove-roomie">
                    Remove
                </button>
                <ul>
                    <Chore>
                        Take out the trash
                    </Chore>
                    <Chore>
                        Sweep living room floor
                    </Chore>
                    <Chore>
                        Vacuum hallway
                    </Chore>
                </ul>
                <button type="button" className="add-chore">
                    <Link to='/addChore'>Add a Chore </Link>
                </button>
            </>
        );
}
