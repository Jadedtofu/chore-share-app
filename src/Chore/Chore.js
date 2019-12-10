import React, { Component } from 'react';
import './Chore.css';

class Chore extends Component {


    render() {
        const { chore } = this.props;
        // console.log(this.props);

        // will have to do something with the checked prop for crossing out chore

        return(
            <>
              <p className ="chore">
                {chore}
              </p>
              <button type="button" className="done-button">Done</button>
              <button type="button" className="delete-button">Delete</button>
            </>
        )
    }
}

export default Chore;