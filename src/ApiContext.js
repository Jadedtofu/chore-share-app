import React from 'react'

export default React.createContext({
  roomies: [],
  chores: [],
  addRoomie: () => {},
  deleteRoomie: () => {},
  addChore: () => {},
  deleteChore: () => {},
 });
