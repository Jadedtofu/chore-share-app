import React, { Component } from 'react';
import './Home.css';
import Roomie from '../Roomie/Roomie';
import Chore from '../Chore/Chore';
import { Link } from 'react-router-dom';
import apiContext from '../ApiContext';

class Home extends Component {

    static contextType = apiContext;

    render() {
        const { roomies=[], chores=[] } = this.context;
        console.log(this.context);
        
        return(
            <main className="homePage">
                {/*  map <Roomie /> component, edit roomie component for map */}
            <section className="roomie1">
                <Roomie note="Rooming for 6 months, likes cats">
                    Jane Rom
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
                <button type="button" className="addChore">
                    <Link to='/addChore'>Add a Chore </Link>
                </button>
            </section>
            
            <section className="roomie2">
                <Roomie note="Rooming for 1 year, allergic to dogs">
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
                <button type="button" className="addChore">
                    <Link to='/addChore'>Add a Chore </Link>
                </button>
            </section>

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