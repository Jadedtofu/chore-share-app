import React from 'react';
import './Chore.css';


export default function Chore(props) {
        return (
            <>
                <li>
                    {props.children}
                </li>
                <button type="button">Done</button>
                <button type="button">Delete</button>
            </>
        );
}