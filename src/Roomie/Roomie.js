import React, { Component } from 'react';
import './Roomie.css';

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
