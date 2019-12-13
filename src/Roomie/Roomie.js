import React, { Component } from 'react';
import './Roomie.css';
import Chore from '../Chore/Chore';
import ApiContext from '../ApiContext';
import config from '../config';

class Roomie extends Component {
    static defaultProps = {
        match: {
            params: {}
        },
        
        history: {
            push: () => { } 
        },
        onDeleteRoomie: () => {}
    }

    static contextType = ApiContext;

    handleClickDeleteRoomie = e => {   // deletes the roomie
        e.preventDefault();
        const roomie_id = this.props.id

        fetch(`${config.API_ENDPOINT}/roomies/${roomie_id}`, {
            method: `DELETE`,
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if(!res.ok) {
                return res.json().then(e => Promise.reject(e))
            }
        })
        .then(() => {
            this.context.deleteRoomie(roomie_id)
            this.props.onDeleteRoomie(roomie_id)
        })
        .catch(error => {
            console.error({ error })
        });
    }

    handleCheckChore = () => {
        this.props.history.push('/home')
    }

    handleDeleteChore = () => {
        this.props.history.push('/home')
    }

    render() {
        const { name, note, chores } = this.props

        return(
            <>
                <div className="tooltip">
                    <header role="banner" className="tooltip-content">
                        <h2 className="roomie-names">
                            {name}
                        </h2>
                    </header>
                    {!this.props.note ? null : 
                    <p className={!this.props.note ? null : "tooltip-message"} >
                        {note}
                    </p>}
                </div>
                <button 
                    type="button" 
                    className="remove-roomie-btn"
                    onClick={this.handleClickDeleteRoomie}
                >
                    Remove
                </button>
                <ul className="chores">
                    {chores.map(chore => 
                        <li key={chore.id}>
                            <Chore id={chore.id}
                                   chore={chore.chore}
                                   checked={chore.checked}
                                   roomie_id={chore.roomie_id}
                                   onCheckChore={this.handleCheckChore}
                                   onDeleteChore={this.handleDeleteChore}
                            />
                        </li>
                    )}
                </ul>
            </>
        )
    }
}

export default Roomie;