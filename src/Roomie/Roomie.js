import React, { Component } from 'react';
import './Roomie.css';
import Chore from '../Chore/Chore';
import { Link } from 'react-router-dom';

class Roomie extends Component {

    render() {

        const { note, name, chores } = this.props
        // console.log(this.props);

        return(
            <>
                <div className="tooltip">
                    <header role="banner" className="tooltipContent">
                        <h2 className="roomieNames">
                            {name}
                        </h2>
                    </header>
                    <p className="tooltipMessage">
                        {note}
                    </p>
                </div>
                <button type="button" className="removeRoomie">
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
                    <Link to='/addChore'>Add a Chore </Link>
                </button>
            </>
        )
    }
}

export default Roomie;