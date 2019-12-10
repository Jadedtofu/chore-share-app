import React, { Component } from 'react';
import './Home.css';
import Roomie from '../Roomie/Roomie';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';

class Home extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
    
    static contextType = ApiContext;

    // deletes roomie, but doesn't update until refresh, why?
    handleDeleteRoomie = roomie_id => {
        this.props.history.push('/')
        console.log(this.props.history);
    }

    // this deletes the roomie but will display errors

    render() {
        const { roomies=[], chores=[] } = this.context;
        // const { roomie_id } = this.props.match.params
        // console.log(this.context);

        const getChoresForRoomie = (chores=[], roomieId) => (
            (!roomieId)
            ? chores
            : chores.filter(chore => chore.roomie_id === roomieId)
        );
        // console.log(getChoresForRoomie(chores, 2))

        return(
        <main className="home-page">
            {roomies.map(roomie => 
                <section key={roomie.id} className="roomie">
                    <Roomie id={roomie.id}
                            name={roomie.name}
                            note={roomie.note}
                            chores={getChoresForRoomie(chores, roomie.id)}
                            onDeleteRoomie={this.handleDeleteRoomie} />
                </section>
            )}

            <section className="add-roomie">
                <button type="button" className="addRoomieButton">
                    <Link to='/addRoomie'>Add a Roomie</Link>
                </button>
            </section>
        </main>
        );
    }
}

export default Home;