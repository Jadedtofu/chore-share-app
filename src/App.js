import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import AppHeader from './AppHeader/AppHeader';
import Landing from './Landing/Landing';
import Home from './Home/Home';
import AddChore from './AddChore/AddChore';
import AddRoomie from './AddRoomie/AddRoomie';
import ApiContext from './ApiContext'

class App extends Component {
  state = {
    chores: [
      { id: 1, chore: 'Take out the trash', checked: false, roomie_id: 1 },
      { id: 2, chore: 'Sweep living room floor', checked: false, roomie_id: 1},
      { id: 3, chore: 'Scrub the toilet', checked: false, roomie_id: 2},
      { id: 4, chore: 'Vacuum hallway', checked: false, roomie_id: 1},
      { id: 5, chore: 'Wash the dishes', checked: false, roomie_id: 2},
      { id: 6, chore: 'Dust the shelves', checked: false, roomie_id: 2}
    ],

    roomies: [
      { id: 1, name: 'Jane Rom', note: 'Rooming for 6 months, likes cats' },
      { id: 2, name: 'James Mor', note: 'Rooming for 1 year, allergic to dogs'}
    ]
  };

  render() {
    const value={
      roomies: this.state.roomies,
      chores: this.state.chores
    }

    // console.log(value);

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
