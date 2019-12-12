import React, { Component } from 'react';
import './Home.css';
import Roomie from '../Roomie/Roomie';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';

class Home extends Component {
    static defaultProps = {
        match: {
            params: {}
        },
        history: {
            push: () => { }
        }
      }
    
    static contextType = ApiContext;

    // deletes roomie and pushes to home page
    handleDeleteRoomie = () => {
        this.props.history.push('/home')
        // console.log(this.props.history);
    }

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

            <section className="add-buttons">
                <button type="button" className="add-roomie-btn">
                    <Link to='/add-roomie'>Add a Roomie</Link>  
                </button>

                <button type="button" className="add-chore-btn">
                    <Link to='/add-chore'>Add a Chore </Link>
                </button>
            </section>
        </main>
        );
    }
}

export default Home;