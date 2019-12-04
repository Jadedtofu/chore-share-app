import React, { Component } from 'react';
import './Home.css';
import Roomie from '../Roomie/Roomie';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';

class Home extends Component {

    static contextType = ApiContext;

    render() {
        const { roomies=[], chores=[] } = this.context;
        // console.log(this.context);

        const getChoresForRoomie = (chores=[], roomieId) => (
            (!roomieId)
            ? chores
            : chores.filter(chore => chore.roomie_id === roomieId)
        );
        // console.log(getChoresForRoomie(chores, 2))

        return(
        <main className="homePage">
            {roomies.map(roomie => 
                <section key={roomie.id} className="roomie">
                    <Roomie name={roomie.name}
                            note={roomie.note}
                            chores={getChoresForRoomie(chores, roomie.id)}>
                    </Roomie>
                </section>
            )}

            <section className="addRoomie">
                <button type="button" className="addARoomie">
                    <Link to='/addRoomie'>Add a Roomie</Link>
                </button>
            </section>
        </main>
        );
    }
}

export default Home;