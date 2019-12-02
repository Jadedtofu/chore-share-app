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
import RoomiePage from './RoomiePage/RoomiePage';

class App extends Component {
  state = {
    chores: [
      { id: 1, chore: 'Take out the trash', checked: false },
      { id: 2, chore: 'Sweep living room floor', checked: false},
      { id: 3, chore: 'Scrub the toilet', checked: false},
      { id: 4, chore: 'Vacuum hallway', checked: false},
      { id: 5, chore: 'Wash the dishes', checked: false},
      { id: 6, chore: 'Dust the shelves', checked: false}
    ],

    roomies: [
      { id: 1, name: 'Jane Rom', note: 'Rooming for 6 months, likes cats' },
      { id: 2, name: 'James Mor', note: 'Rooming for 1 year, allergic to dogs'}
    ]
  };

  render() {
    return (
      <>
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

        <Route
          path='/roomiePage'
          component={RoomiePage}
        />

        <Footer />
      </>
    );
  }
}

export default App;
