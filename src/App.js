import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import AppHeader from './AppHeader/AppHeader';
import Landing from './Landing/Landing';
import Home from './Home/Home';
import AddChore from './AddChore/AddChore';
import AddRoomie from './AddRoomie/AddRoomie';
import ApiContext from './ApiContext'
import config from './config';
import './App.css';

class App extends Component {
  // state = {
  //   chores: [
  //     { id: 1, chore: 'Take out the trash', checked: false, roomie_id: 1 },
  //     { id: 2, chore: 'Sweep living room floor', checked: false, roomie_id: 1},
  //     { id: 3, chore: 'Scrub the toilet', checked: false, roomie_id: 2},
  //     { id: 4, chore: 'Vacuum hallway', checked: false, roomie_id: 1},
  //     { id: 5, chore: 'Wash the dishes', checked: false, roomie_id: 2},
  //     { id: 6, chore: 'Dust the shelves', checked: false, roomie_id: 2}
  //   ],

  //   roomies: [
  //     { id: 1, name: 'Jane Rom', note: 'Rooming for 6 months, likes cats' },
  //     { id: 2, name: 'James Mor', note: 'Rooming for 1 year, allergic to dogs'}
  //   ]
  // };

  state = {
    chores: [],
    roomies: []
  };

componentDidMount() {
  Promise.all([
    fetch(`${config.API_ENDPOINT}/chores`),
    fetch(`${config.API_ENDPOINT}/roomies`)
  ])
  .then(([choresRes, roomiesRes]) => {
    if(!choresRes.ok)
      return choresRes.json().then(e =>Promise.reject(e))
      if(!roomiesRes.ok)
        return roomiesRes.json().then(e => Promise.reject(e))

      return Promise.all([
        choresRes.json(),
        roomiesRes.json(),
      ])
  })
  .then(([chores, roomies]) => {
    this.setState({ chores, roomies })
    // console.log(this.state)
  })
  .catch(error => {
    console.error({ error })
  });
}

  render() {
    const value={
      roomies: this.state.roomies,
      chores: this.state.chores
    }

    console.log(value);

    return (
      <ApiContext.Provider value={value}>
        <Nav />
        <AppHeader />

        <Route
          exact path='/'
          component={Landing}
        />

        <Route
          path='/home'
          component={Home}
        />

        <Route
          path='/addChore'
          component={AddChore}
        />

        <Route
          path='/addRoomie'
          component={AddRoomie}
        />

        <Footer />
      </ApiContext.Provider>
    );
  }
}

export default App;
