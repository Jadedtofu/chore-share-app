import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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

handleAddRoomie = roomie => {
  this.setState({
    roomies: [
      ...this.state.roomies,
      roomie
    ]
  });
}

handleDeleteRoomie = roomie_id => {
  this.setState({
    roomies: this.state.roomies.filter(roomie => roomie.id !== roomie_id)
  });
}

handleAddChore = chore => {
  this.setState({
    chores: [
      ...this.state.chores,
      chore
    ]
  });
}

handleCheckChore = chore => {
  const checkedChore = this.state.chores.map(item => {
    if (item === chore) {
      item.checked = !item.checked
    }
    return item;
  })
  this.setState({
    chores: checkedChore
  })
}

handleDeleteChore = chore_id => {
  this.setState({
    chores: this.state.chores.filter(chore => chore.id !== chore_id)
  });
}

  render() {
    const value={
      roomies: this.state.roomies,
      chores: this.state.chores,
      addRoomie: this.handleAddRoomie,
      deleteRoomie: this.handleDeleteRoomie,
      addChore: this.handleAddChore,
      checkChore: this.handleCheckChore,
      deleteChore: this.handleDeleteChore
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
          path='/add-chore'
          component={AddChore}
        />

        <Route
          path='/add-roomie'
          component={AddRoomie}
        />

        <Footer />
      </ApiContext.Provider>
    );
  }
}

export default App;
