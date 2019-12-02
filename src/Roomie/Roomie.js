import React, { Component } from 'react';
import './Roomie.css';

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
            </>
        );
}
