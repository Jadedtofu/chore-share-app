import React from 'react';
import './Chore.css';
import { Link } from 'react-router-dom';

export default function Chore(props) {
        return (
            <>
                <li>
                    {props.children}
                </li>
                <button type="button"><Link to='/addChore'>Add</Link></button>
                <button type="button">Delete</button>
            </>
        );
}