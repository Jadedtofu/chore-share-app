import React, { Component } from 'react';
import './Home.css';
import Roomie from '../Roomie/Roomie';
import Chore from '../Chore/Chore';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <>
            <section className="roomie-1">
                <Roomie>
                    <Link to='/roomiePage'>Jane Rom</Link>
                </Roomie>
                  <ul>
                    <Chore>
                        Take out the trash
                    </Chore>
                    <Chore>
                        Sweep living room floor
                    </Chore>
                    <Chore>
                        Vacuum hallway
                    </Chore>
                  </ul>
                <button type="button" className="add-chore">
                    <Link to='/addChore'>Add a Chore </Link>
                </button>
            </section>
            
            <section className="roomie-2">
                <Roomie>
                    James Mor
                </Roomie>
                <ul>
                    <Chore>
                        Scrub the toilet
                    </Chore>
                    <Chore>
                        Dust the bookshelf
                    </Chore>
                    <Chore>
                        Wash the dishes
                    </Chore>
                  </ul>
                <button type="button" className="add-chore">
                    <Link to='/addChore'>Add a Chore </Link>
                </button>

                <button type="button" className="add-roomie">
                    <Link to='/addRoomie'>Add a Roomie</Link>
                </button>
            </section>
        </>
        );
    }
}

export default Home;