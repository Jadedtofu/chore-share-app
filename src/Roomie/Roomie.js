import React, { Component } from 'react';
import './Roomie.css';
import Chore from '../Chore/Chore';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';
import config from '../config';

class Roomie extends Component {
    static defaultProps = {
        history: {
            push: () => { } 
        },

        onDeleteRoomie: () => {}
    }

    static contextType = ApiContext;

    handleClickDelete = e => {   // actually deletes the roomie, but with errors :(
        e.preventDefault()
        const roomie_id = this.props.id
        console.log(roomie_id);

        fetch(`${config.API_ENDPOINT}/roomies/${roomie_id}`, {
            method: `DELETE`,
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            console.log(res)
            if(!res.ok) {
                console.log('I ran');
                return res.json().then(e => Promise.reject(e))
            }
            // this.context.onDeleteRoomie(roomie_id)
            // this.props.onDeleteRoomie(roomie_id)
        })
        .then(() => {
            this.context.deleteRoomie(roomie_id)
            this.props.onDeleteRoomie(roomie_id)
            this.props.history.push(`/home`)
        })
        .catch(error => {
            console.error({ error })
        })
    }

    render() {
        const { name, note, chores } = this.props
        // console.log(this.props);

        return(
            <>
                <div className="tooltip">
                    <header role="banner" className="tooltipContent">
                        <h2 className="roomieNames">
                            {name}
                        </h2>
                    </header>
                    <p className={!this.props.note ? null : "tooltipMessage"} >
                        {note}
                    </p>
                </div>
                <button 
                    type="button" 
                    className="removeRoomie"
                    onClick={this.handleClickDelete}
                >
                    Remove
                </button>
                <ul className="chores">
                    {chores.map(chore => 
                        <li key={chore.id}>
                            <Chore id={chore.id}
                                   chore={chore.chore}
                                   checked={chore.checked}
                            />
                        </li>
                    )}
                </ul>
                <button type="button" className="addChoreButton">
                    <Link to='/add-chore'>Add a Chore </Link>
                </button>
            </>
        )
    }
}

export default Roomie;